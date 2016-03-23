---
layout: post
title:  "Blog setup"
date:   2016-03-23 21:31:12 +0100
categories:
 - hosting
 - blog
 - tech
---

Based upon [server setup] I want to have some kind of homepage or blog.
I think [wordpress] is still the number one choice, but PHP no, not this time.
Some random CMS? Python would be nice. In the end I had a look at [mezzanine]
which looks okayish.
At [exoscale] I'm currently working on runstatus, which generates static status
pages. This led me also to the idea to have something static. [GitHub Pages]
came first to my mind. But again the American, big company topic.

Anyway I think [GitHub] is an awesome company, open sourcing and supporting a
lot of cool tools. So I came to [jekyll] and give it a try.

[grunt] is nice for automating and executing development, building, linting task.
Glad there is a jekyll plugin [grunt-jekyll]. First reason to introduce is
spell checking.
[grunt-spell] which is the first search result has very limited configuration
options and has problems with html and jekyll markdown files.
So I ended up using [grunt-htmllint] with [htmllint-spellcheck] and
[grunt-mdspell] and [grunt-mdlint] for linting.



[exoscale]: https://www.exoscale.ch/
[GitHub]: https://github.com
[GitHub Pages]: https://pages.github.com/
[grunt]: http://gruntjs.com/
[grunt-jekyll]: https://github.com/dannygarcia/grunt-jekyll
[grunt-htmllint]: https://www.npmjs.com/package/grunt-htmllint
[grunt-mdlint]: https://github.com/ChrisWren/grunt-mdlint
[grunt-spell]: https://github.com/shama/grunt-spell
[htmllint-spellcheck]: https://github.com/htmllint/htmllint-spellcheck
[grunt-mdspell]: https://www.npmjs.com/package/grunt-mdspell
[jekyll]: https://jekyllrb.com/
[mezzanine]: http://mezzanine.jupo.org/
[runstatus]: https://runstatus.com/
[server setup]: {% post_url 2016-03-22-Server-setup %}
[wordpress]: https://wordpress.com/
