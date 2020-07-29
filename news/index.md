---
layout: grid
title: What's going on with resistance lab? News, events and updates
title_fancy: What's going on with Resistance Lab?<br> <span>News, events and updates</span>
---

{% for news in site.news %}

{% include box.html %}

## [{{ news.title }}]({{ news.url }})

**Published {{ news.date | date: "%-d %B %Y" }}**

{{ news.excerpt }}

[Read more]({{ news.url }}){:.btn}

{% include endbox.html %}

{% endfor %}
