/*
 * Created on Fri Nov 13 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

import { docsLlms } from '@/utils/content-utils';

export const revalidate = false;

export async function GET() {
  return new Response(await docsLlms.full());
}
