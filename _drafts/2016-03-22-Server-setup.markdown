---
layout: post
title:  "Server setup"
date:   2016-03-22 21:31:12 +0100
categories:
 - hosting
 - blog
 - tech
---

Requirements:

 - Hosted in Germany or at least Europe
 - Hosted by a small provider

I couldn't find a noteworthy blog provider in Germany. As hosting provider I
found [accelerated], which looked promising. Ordered a dedicated server, it
took some days until I got access, which was a bit surprising, being used IaaS
like [AWS], [google compute engine], [OpenStack] and [CloudStack]. The web
interface looks old, the newest ubuntu version which I can install is:
`Installation Ubuntu 12.04 LTS - BETA (64-Bit)`. Not so important,
the idea is to explore and improve reasonable security, so I don't want
to have a 'random' pre installed operation system.

Gatekeeper: 
 - [nginx-lua-redis] Too old versions, too old
 - [openresty] 




[accelerated]: https://www.accelerated.de
[AWS]: https://aws.amazon.com/
[CloudStack]: https://cloudstack.apache.org/
[nginx-lua-redis]: https://sosedoff.com/2012/06/11/dynamic-nginx-upstreams-with-lua-and-redis.html
[google compute engine]: https://cloud.google.com/compute/
[OpenStack]: https://www.openstack.org/
[openresty]: http://openresty.org/en/dynamic-routing-based-on-redis.html

