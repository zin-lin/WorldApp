# APP
- The Application is developed by Author: Zin Lin Htun
## ToolChain
`Java 17`[
<img alt="Java" width="26px" align="left" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
](https://www.java.com/en/)

`React`[
<img alt="React" width="26px" align="left" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
](https://react.dev/)

`Redux`[
<img alt="Redux" width="26px" align="left" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
](https://react-redux.js.org/)

`TypeScript`
[
<img alt="TypeScript" width="26px" align="left" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
](https://www.typescriptlang.org/)

`Dockers`
[
<img alt="Docker" width="26px" align="left" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
](https://www.docker.com/)

`Spring.io`
[
<img alt="Spring" width="26px" align="left" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
](https://spring.io/)

### Configure
- Currently, `app` is configured to run on `localhost:8080` since `db` is exposed on `localhost 3001`
 and proxy for `fe` is set to be `8080`.
- Config proxy for `fe` to just `app`, when using with dockers
  - For running all dockers run `docker-compose.yml`
  - the whole of application after successful `compose` will be exposed at server's port `5000`.

### Download And Test
- Docker Way
  - Clone `repository`  [
    <img alt="GitHub" width="26px" align="left" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
    ](https://github.com/)

  - docker-compose `up`
  - change proxy in `frontend`'s `world-napier` to be `app` instead of `http://localhost:8080`
  - access app via server's port `5000`
- Development Way
   - run DockerCompose `docker-compose.yml` for just `db`
   - run `DemodocApplication.java`
   - 
  ```Powershell
       >cd src/main/frontend/world-napier
       >npm start
  ```
       