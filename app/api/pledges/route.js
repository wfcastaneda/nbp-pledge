import prisma from '@/lib/prisma';

export const revalidate = 0;

export async function GET(request) {
    const count = await prisma.pledge.count();
    const recent = await prisma.pledge.findMany({ take: 10 });
    return Response.json({ count: count, recent: recent });
}
