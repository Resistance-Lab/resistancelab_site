---
layout: grid
title: News and events
---

{% for news in site.news %}

{% include box.html %}

## {{ news.title }}

**Published {{ news.date | date: "%-d %B %Y" }}**

{{ news.excerpt }}

[Read more]({{ news.url }}){:.btn}

{% include endbox.html %}

{% endfor %}
