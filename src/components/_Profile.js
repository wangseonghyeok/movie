export default function Profile({ profileInfo }) {
  // 구조분해 할당
  const { profile_path, name } = profileInfo;
  return (
    <>
      {profile_path !== null ? <img src={`https://image.tmdb.org/t/p/w185/${profile_path}`} /> : <img src={`/images/man.png`} />}
      <span>{name}</span>
    </>
  );
}
