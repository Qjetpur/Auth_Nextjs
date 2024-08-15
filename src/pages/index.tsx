// pages/index.js

export default function Home() {
    return null; // Optionally, return null or a simple message like "Redirecting..."
  }
  
  export async function getServerSideProps(context: any) {
    return {
      redirect: {
        destination: '/register',
        permanent: false, // Set to true if you want this to be a permanent redirect (HTTP 308)
      },
    };
  }
  