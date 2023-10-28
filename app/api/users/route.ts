import { Help } from '@/app/utils/help';

export async function GET(request: Request) {
    await Help.delay(5000);

    return Response.json({ test: 'data fake aqui' }, { status: 200 });
}