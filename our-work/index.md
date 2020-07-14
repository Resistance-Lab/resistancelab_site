---
layout: grid
title: We research, create and publish reports, articles, graphs and data sources about state violence and its causes
title_fancy: We <span>research, create and publish</span><br> reports, articles, graphs and data<br> about <span>state violence and its causes.</span>
---

<!-- Page introduction -->

{% include box.html %}

Our collective works together to identify the issues doing the most harm to the structurally disadvantaged communities we are part of. We then explore the issues together using the multidiciplinary expertise of our members which spans a wide range of fields such as anthropology, community organising, criminology, data science, history, sociology, statistics, and youth work.
{:.bigger}

This page catalogues the outputs of this ongoing process in the form of longform reports, blog posts, data repositories, and other information and tools designed to help create lasting systemic change.
{:.bigger}

{% include endbox.html %}

{% for work in site.our-work %}

{% include box.html %}

## {{ work.title }}

**Published {{ work.published | date: "%-d %B %Y" }}**

{{ work.teaser }}

[Read the report]({{ work.url }}){:.btn}

{% include endbox.html %}

{% endfor %}
