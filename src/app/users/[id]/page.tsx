export default function UserProfilePage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>사용자 프로필</h1>
      <p>사용자 ID: {params.id}</p>
    </div>
  );
}
