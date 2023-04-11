import prisma from "@/lib/prisma";

export async function GET(request) {
    if (request.method === 'GET') {
        try {
            const data = await prisma.pledge.count();
            return Response.json({ pledgeCount: data });
        } catch (err) {
            console.error(err);
            return Response.json({ msg: 'Something went wrong' });
        }
    } else {
        return Response.json({ msg: 'Method not allowed' });
    }
}
