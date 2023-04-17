import prisma from '@/lib/prisma';

export async function GET(request) {
    const count = await prisma.pledge.count();
    const recent = await prisma.pledge.findMany({ take: 3 });
    return Response.json({ count: count, recent: recent });
}
