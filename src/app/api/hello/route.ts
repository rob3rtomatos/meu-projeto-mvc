export async function GET() {
  return Response.json({
    message: 'Hello from API',
    timestamp: new Date().toISOString(),
  });
}
