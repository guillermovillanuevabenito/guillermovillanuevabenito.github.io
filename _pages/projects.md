---
layout: single
title: "Projects"
permalink: /projects/
author_profile: true
classes: wide
---

<div class="entries-grid">
  {% for post in site.posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
