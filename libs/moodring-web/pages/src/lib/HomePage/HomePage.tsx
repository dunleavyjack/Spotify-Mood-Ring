import { NavBar } from '@moodring/shared/components/react';

export function HomePage() {
  const loginToSpotify = async () => {
    window.location.href = 'http://localhost:3000/api/authentication/login';
  };

  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    >
      <NavBar />
      <main style={{ marginTop: '70px' }}>
        <button onClick={loginToSpotify}>Hello</button>
      </main>
    </div>
  );
}
