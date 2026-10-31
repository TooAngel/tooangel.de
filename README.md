# www.tooangel.de

Personal page of Tobias Wilken. Plain static HTML, no build step.

Served as a static dokku app (`tooangel-de` on server; the empty `.static`
file selects dokku's nginx buildpack).
A push to `master` triggers `.github/workflows/deploy.yml`, which asks the
dokku-bridge to sync and build this repo, then waits until the live page
matches the commit.

`app-nginx.conf.sigil` is the buildpack's default nginx config plus one
rule: every host name other than `www.tooangel.de` (tooangel.de,
tooangel.com, tooangel.org, ...) gets a 301 to `https://www.tooangel.de`.
Those names only need to be domains of the dokku app.

Preview locally:

    python3 -m http.server 8000

and open http://127.0.0.1:8000/.

`keys/ssh-signing.pub` is the public SSH key used to sign commits.
