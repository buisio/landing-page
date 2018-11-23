---
layout: post
title: Simplifying Cloud
date:  2018-11-22 10:50:51 +0000
categories: cloud tooling
description: |
  A brief essay :scroll: on why we're setting out to simplify the way we handle
  our cloud :cloud: computing :computer: needs.
unicode_description: |
  A brief essay on why we're setting out to simplify the way we handle
  our cloud computing needs.
dark:
  hero: true
  title: true
banner: /assets/images/posts/clouds-blue-bg240-rainbow.png
enabled: true
contact: true
author:
  name: David Asabina
  twitter: vidbina
---

## Getting it right is hard

With all the developments we've seen over the last years terms of automation
which include orchestration, containerization and virtualization, it is still
surprising how much time teams spend on reinventing the wheel regarding their
basic plumbing.

Nearly every firm we've assisted in the last years, spent months on designing
pipelines, setting up orchestration tooling, figuring out workflows and
learning the ins-and-outs of their provider of choice. Initially, these points
may seem like a manageable amount of work, but experience will generally teach
that there is more than meets the eye.

## Mission

Providing a decent solution for teams to to be able to focus more on their
product <em>rather than the support system</em> is the core problem that we are
trying to solve with our Stack One solution.

Teams should be able to provision decent working environments on their provider
of choice while maintaining full ownership of said environments and we are
building some tooling to make that happen. In the end we just want you to think
about git pushes and see everything materialize as needed.

## First lean steps

The first step was to distil our learnings from the last couple of years down
to a few parameterized configurations that we can deploy and operate with a
collection of known and trusted tools such as Docker, Kubernetes and Terraform,
among others. Much of our previous work was directed at building setups on
Google Cloud and we've decided to keep our focus on this provider for the time
being as a considerable portion of our clients expressed a desire to use this
platform.

We have also done work on Alibaba Cloud, AWS, Azure and OpenStack-compliant
providers, but we're trying really hard to maintain focus on a few providers
rather than many in order to provide a significant advantage for the providers
that we do support.

We in the process of <em>fully automating</em> our configurations and can use as
much customer feedback as possible to inform our future decisions.

Even with some of the manual operations in our current workflow, we have been
able to provision viable environments for different teams with considerably
less effort than would be invested had those teams set it all up by themselves.

If you need some help with infrastructure even if you're past the stage of
initial setup feel free to get in touch since we're eager to learn more about
the needs of different teams out there in the wild.

Check our [homepage](/#pricing) for our pricing plans and more product details
and feel free to address us on [Twitter](https://twitter.com/stack1io) about
anything you may find unclear as it is imperative that we address these issues
as soon as possible in our effort to give direction to this solution and serve
our customers.
