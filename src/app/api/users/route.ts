export async function GET() {
  const users = [
    { id: 1, name: 'João Silva', email: 'joao@example.com' },
    { id: 2, name: 'Maria Santos', email: 'maria@example.com' },
    { id: 3, name: 'Pedro Costa', email: 'pedro@example.com' },
  ];
  return Response.json(users);
}

export async function POST(request: Request) {
  const data = await request.json();
  return Response.json(
    { id: 4, ...data },
    { status: 201 }
  );
}
