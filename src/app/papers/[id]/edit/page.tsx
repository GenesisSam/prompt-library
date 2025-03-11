export default function PaperEditPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>프롬프트 수정</h1>
      <p>프롬프트 ID: {params.id} 수정 페이지</p>
    </div>
  );
}
