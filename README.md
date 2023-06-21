# brickbbs

这是一个 Violentmonkey（暴力猴）的脚本，改善了原生 iflyteksns 论坛的一些体验。 目前有以下两个特性：

- 回帖屏蔽，包括 JG、特短（5 字符以内）内容，净化论坛环境。
- 模拟 hash 路由，支持帖子链接直达。

GitHub: [jonymei/brickbbs](https://github.com/jonymei/brickbbs)

## 回帖屏蔽

论坛上充斥着大量 JG 的无意义回复，十分碍眼，且影响心情，现在你可以轻松的屏蔽这些回帖了！

支持屏蔽 JG 和 5 个字符以内的回帖（当然也包括纯表情包），可以在设置里启用或者关闭这两个规则，默认都是开启的。

![brick settings](https://raw.githubusercontent.com/jonymei/brickbbs/main/assets/settings.png)

应用效果如下：

![run](https://raw.githubusercontent.com/jonymei/brickbbs/main/assets/run.png)

## hash 路由

一般情况下（似乎也没有不一般的情况），论坛的实际内容部分是通过 `iframe` 嵌入主页面的。但是很 xx 的问题是，主页面的 URL 是静态的。你无论怎么切换论坛的实际内容，URL 都是一样。这就导致了：

1. 一不小心按了你的钛合金 F5，唰，你看的帖子没了，回到了首页。
2. 你看到了一个很劲爆的帖子，想分享给同事，同事只能回复？？？
3. 你看到了一个很实用的帖子，就添加到了收藏夹，然后你下次打开就会发现怎么每个都一样？

现在，事情变得不一样了，我们有了自己的 URL！

例如：

- 心声吧的 URL 长这样 [`https://in.iflytek.com/fornt/forum/index#/iflyteksns/forum/web/special/5`](https://in.iflytek.com/fornt/forum/index#/iflyteksns/forum/web/special/5)
- 帖子的 URL 长这样 [`https://in.iflytek.com/fornt/forum/index#/iflyteksns/forum/web/snsDoc/detail/110552`](https://in.iflytek.com/fornt/forum/index#/iflyteksns/forum/web/snsDoc/detail/110552)
- 分页也是支持的 [`https://in.iflytek.com/fornt/forum/index#/iflyteksns/forum/web/snsDoc/detail/110552/$/page=6`](https://in.iflytek.com/fornt/forum/index#/iflyteksns/forum/web/snsDoc/detail/110552/$/page=6)

这样，打开上面的 URL 时，就会自动跳转到板块首页或者具体的帖子页面上，非常舒适。

## TODO

- [ ] 屏蔽了 JG 之后，一页可能就只有一两个回帖，需要支持对分页进行合并。
- [ ] 现在的 URL 太长了，可以考虑缩短一点。
