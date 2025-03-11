export default function PaperDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>프롬프트 상세</h1>
      <p>프롬프트 ID: {params.id}</p>
    </div>
  );
}
