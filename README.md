# bARK Project

The code for this website is seperated in twig templates.

- Blocks (main templates for head, navbar, footer, scripts)
- Section (for the frontpage content)
- Root (homepage, error page, 404 page)

The website runs on node-express.

Requirements:

- Visual Studio Code
- Nodejs
- PM2
- GIT

Steps on Linux/Ubuntu:

Install Requirements

```
sudo apt update
sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt -y install nodejs
sudo apt-get install git -y
npm install -g pm2 -y
```

Download and install

```
git clone https://github.com/barkproject/website
cd website && yarn install
pm2 start bark.js --watch
```

Start program

```
pm2 start bark.js
```

To see live changes while editing, start your program with --watch

```
pm2 start bark.js --watch
```

Your website is now visible at https://localhost:2111

Want to deploy on a server and make the website publicly visible?

- Install Nginx on your server and follow the steps above.
- Create a cloudflare account and point your domain to your server.
- View "nginx.conf.example" and add this to your nginx config.
- Reload nginx
- Your website is now live.

> [See live demo](https://domain.com)
