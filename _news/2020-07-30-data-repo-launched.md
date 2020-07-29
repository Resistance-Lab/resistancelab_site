---
layout: article
author: Alice
title: Data repository launched!
excerpt: |
  Our data repository that we are launching this week is a collection of data relating to state violence. It came about because the data we were looking for in our research on Taser usage by Greater Manchester Police was proving difficult to get hold of, and was spread across multiple spreadsheets and PDF files in lots of different formats.

  Aside from collating the source data like many ‘open data’ websites do, we also offer cleaned versions of the data that are more usable than spreadsheets as well as data designed for specific analysis purposes.
---

Our data repository that we are launching this week is a collection of data relating to state violence. It came about because the data we were looking for in our research on Taser usage by Greater Manchester Police was proving difficult to get hold of, and was spread across multiple spreadsheets and PDF files in lots of different formats.

Aside from collating the source data like many ‘open data’ websites do, we also offer cleaned versions of the data that are more usable than spreadsheets as well as data designed for specific analysis purposes.

This will save researchers time in being able to quickly start analysing data rather than spend weeks of finding and cleaning.

The data pipelines that produce this output are all reproducible, producing the same output on every run, and we have tests to ensure the quality of data too as well as documentation tracing the data back to original sources.

We believe that some of the data we are making available today through this repository has never had any real analysis done on it due to it being so difficult to work with.  We are keen to see what people do with this, and plan on running some workshops to enable the communities affected by this data to start using it for themselves.

There are two datasets we are particularly proud of in this first release:

- Ethnicity data from the 2011 census by police force area, allowing researchers to easily compare police data involving ethnicity to the actual population of the police force areas
- Taser usage by police force by year from 2015 to 2019, including the types of usage

The reports that Resistance Lab put out are powered by data in the data repository.  This means anyone can see exactly where our data came from, and exactly how we cleaned and prepared it.

The pipelines make heavy use of Pandas and the tests are based around Great Expectations, both installed through a Python virtual environment for further reproducibility.  And data is documented through README files which are turned into webpages using GitHub Pages.

[Go to the Resistance Lab Data Site](https://data.resistancelab.network){:.btn}
