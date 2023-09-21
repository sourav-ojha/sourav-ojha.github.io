const Skill = () => {
  return (
    <section id="skill" className="w-full py-28">
      <div className="w-11/12 m-auto ">
        <h2 className="w-full text-4xl font-bold text-center">
          Tools & Technologies
        </h2>
        <div className="flex flex-wrap gap-5 ">
          <Images />
        </div>
      </div>
    </section>
  );
};

export default Skill;

const DATA = [
  "html-5",
  "css-3",

  "javascript",
  "react",
  "nodejs",
  "nextjs",
  "typescript",
  "express",
  "threejs",
  "socket.io",
  "react-query",
  "remix",
  "python",
  "graphql",
  "markdown",
  "websocket",
  "gatsby",

  "tauri",
  // "grafana",

  "material-ui",
  "tailwindcss",
  "bootstrap",
  "ant-design",
  "materializecss",

  "mongodb",
  "firebase",
  // "mysql",
  "supabase",
  "appwrite",
  "electron",
  "influxdb",
  "postgresql",
  // "kafka",

  "nvm",
  "npm",
  "yarn",
  "pm2",
  "expo",
  "lerna",
  "prettier",

  "bun",
  "chrome",
  "firefox",

  "github",
  "visual-studio-code",
  "notion",
  "brave",
  "mozilla",

  // "google-cloud-functions",
  // "lighthouse",
  // "github-actions",

  "react-router",

  "vercel",

  "microsoft-windows",
  "linux",
  "ubuntu",

  "aws",
  "aws-api-gateway",
  "aws-amplify",
  "aws-ec2",
  "aws-elastic-beanstalk",
  "aws-lambda",
  "aws-sqs",
  "aws-s3",
  "aws-sns",
  "aws-appsync",

  // "mailchimp",

  "sass",
  "oauth",
  "git",
  "pwa",

  "jwt",
  "gitlab",
  // "figma",
  "cloudinary",
  // "gnome",
  "bash",
  "momentjs",
  "ngrok",
  "axios",
  "docker",
  "redux",
  "puppeteer",

  // "postman",
  // "google-maps",
  "netlify",
  // "greensock",

  "nginx",
  // "digital-ocean",
  // "redis",
  // "jira",
  "eslint",
  // "heroku",
  "nodemon",
  // "google-meet",

  "prisma",
  // "zoom",
];

const Images = () =>
  DATA.map((item) => (
    <img
      src={`/skill/${item}.svg`}
      alt={item}
      className="max-w-[80px] py-5"
      // aria-haspopup="true"
      key={item}
      title={item}
    />
  ));
