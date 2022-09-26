import { Link } from "react-router-dom";

export default function Profile({ profileInfo }) {
  console.log(profileInfo.id);
  return (
    <>
      <Link to={`/profile/${profileInfo.id}`}>
        {profileInfo.profile_path !== null ? (
          <img src={`https://image.tmdb.org/t/p/w185/${profileInfo.profile_path}`} alt={profileInfo.name} />
        ) : (
          <img src={`/images/man.png`} alt={profileInfo.name} />
        )}
        <span>{profileInfo.name}</span>
      </Link>
    </>
  );
}
