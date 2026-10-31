# www.tooangel.de

Personal page of Tobias Wilken. Plain static HTML, no build step.

Served by nginx in a container on dokku (app `tooangel-de` on server).
A push to `master` triggers `.github/workflows/deploy.yml`, which asks the
dokku-bridge to sync and build this repo, then waits until the live page
matches the commit.

Preview locally:

    python3 -m http.server 8000

and open http://127.0.0.1:8000/.

`keys/ssh-signing.pub` is the public SSH key used to sign commits.
