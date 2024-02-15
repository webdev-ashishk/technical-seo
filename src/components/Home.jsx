const Home = () => {
  return (
    <div>
      <div className="main">
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            fontStyle: "bold",
          }}
        >
          Welcome to Technical SEO
        </h1>
        <ol
          style={{
            fontSize: "20px",
            border: "2px solid red",
            width: "600px",
            margin: "auto",
            borderRadius: "10px",
          }}
        >
          <li>sitemap.xml</li>
          <li>sitemap.html</li>
          <li>robots.txt</li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
