export default function UserPostsPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>사용자의 프롬프트</h1>
      <p>사용자 ID: {params.id}의 프롬프트 목록</p>
    </div>
  );
}
