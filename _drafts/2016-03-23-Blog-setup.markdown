---
layout: post
title:  "Blog setup"
date:   2016-03-23 21:31:12 +0100
categories:
 - hosting
 - blog
 - tech
---

Since a couple of weeks I'm thinking about or planning to reactivate
[tooangel.de] again. Not yet a fixed plan, but some kind of portal for
my pet projects with a blog component.

I think [wordpress] is still the number one choice or at least the first which
came to my mind. Some thought why I do not want to choose wordpress this time.

 - php: I try to avoid religious discussions about programming lanugages. I
think in most of the cases these discussions are just to feel better ranting
about the stuff which wasn't choosen. To decide for the right language has
often a lot of factors, priority of performance of the application, security
concerns, experience in the team, team size, the new cool thing around
mentality, eco system, ....
In my case, I have some components which should or could be integrated, most
of them are written in [python] so, if I have to choose something I would
prefer python right now.
 - security issue: Wordpress is a complex and widely used system, within the
last years there were a lot of security issues published. It is really hard,
maybe even impossible, to write software which is fully secure. If a system
gets a lot of tracking, the number potential attackers also rises. So is
wordpress more insecure than other systems - I don't know. But do I need to
have all these features and complexity and use the tool everybody is using,
only to writing a couple of lines?
 - cloud-ready: After working a couple of years in the cloud sector, I want to
use stuff which is used at least somehow with the cloud mindset. Hosting
wordpress in the cloud is possible, but you have to walk some ways, which are
necessary meat this way.

K, let's have a look in the python CMS sector. [mezzanine] caught my interest.

 - Based upon [Django], using frameworks which you are used to speeds up a lot.
And you wouldn't have used them before if you wouldn't like them
 - Simple interface.
 - Easy to install.


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
[Django]: https://www.djangoproject.com/
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
[tooangel.de]: http://www.tooangel.de
[wordpress]: https://wordpress.com/
