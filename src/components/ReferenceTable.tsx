/*
 * Created on Mon Nov 16 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

import { Children, isValidElement, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import defaultMdxComponents from 'fumadocs-ui/mdx';

type NodeWithChildren = { children?: ReactNode };

function elements(children: ReactNode) {
  return Children.toArray(children).filter(isValidElement<NodeWithChildren>);
}

function textOf(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');
  if (isValidElement<NodeWithChildren>(node)) return textOf(node.props.children);
  return '';
}

/** 내용 여부. TypeDoc은 빈 칸을 `-`로 채운다. */
function hasText(node: ReactNode) {
  const text = textOf(node).trim();
  return text !== '' && text !== '-';
}

/** TypeDoc 속성 표를 속성별 목록으로 그린다. 다른 표는 기본 표로 둔다. */
export function ReferenceTable(props: ComponentPropsWithoutRef<'table'>) {
  const sections = elements(props.children);
  const headerRow = sections[0] && elements(sections[0].props.children)[0];
  const headers = headerRow ? elements(headerRow.props.children).map((cell) => textOf(cell).trim()) : [];
  const rows = sections[1] ? elements(sections[1].props.children) : [];
  const nameIndex = headers.indexOf('속성');
  const typeIndex = headers.indexOf('타입');
  const descriptionIndex = headers.indexOf('설명');

  // 모르는 구조는 기본 표로 그린다.
  if (nameIndex !== 0 || typeIndex < 0 || !rows.length ||
      rows.some((row) => elements(row.props.children).length !== headers.length)) {
    const Table = defaultMdxComponents.table;
    return <Table {...props} />;
  }

  return (
    <div className="reference-properties" role="list" aria-label="속성 목록">
      {rows.map((row, rowIndex) => {
        const cells = elements(row.props.children);
        const content = (index: number) => (index >= 0 ? cells[index]?.props.children : undefined);
        const metadata = headers.map((heading, index) => ({ heading, index })).filter(({ index }) =>
          index !== nameIndex && index !== typeIndex && index !== descriptionIndex && hasText(cells[index]),
        );
        return (
          <div className="reference-property" role="listitem" key={rowIndex}>
            <div className="reference-property-heading">
              <span className="reference-property-name">{content(nameIndex)}</span>
              <span className="reference-property-type">{content(typeIndex)}</span>
            </div>
            {hasText(content(descriptionIndex)) && (
              <div className="reference-property-description">{content(descriptionIndex)}</div>
            )}
            {metadata.length > 0 && (
              <div className="reference-property-metadata">
                {metadata.map(({ heading, index }) => (
                  <span key={index}><span className="reference-property-label">{heading.replace(/:$/, '')}: </span>{content(index)}</span>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
