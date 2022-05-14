---
TimeLine: 
=> 20220512--0000000 : 章节已创建
---
| #未完成-正文 | #未完成-习题 |
| ------------ | ------------ |

# 有限维实线性空间上的Lesbegue测度

## k-方格的定义

$$
$$

## k-方格与分划

$$
$$

## Lesbegue测度的定义(有限维实线性空间)

$$
$$

***

# 习题

## 有理估计

\<问题描述\>

在代数部分, 我们已经知道了对任一实数 $x$ 和任意给定的正整数 $N$, 总是存在整数 $p, q$ 使得 $1\le q \le N$ 且:

$$
\left|x - \frac pq\right| < \frac 1{q\cdot N} \le \frac 1{q^{\cdot 2}}
$$

现在, 试证明能被更高精度近似的实数是稀少的(零测的), 即对任意 $\varepsilon > 0$ 下式成立, 其中 $q$ 是正整数, $p$ 是整数. 

$$
\mu_{@\R}\left\{
    x: \card\{ 
    \left|x - \frac pq\right| < \frac 1 {q^{\cdot (2 + \varepsilon)}}\} = \aleph(\varnothing)
\right\} = 0
$$

\<问题解答\>

注意到对任意给定的 $q$, 有: 

$$
\begin{matrix}
q(x - \lfloor x \rfloor) \in [0, q)\\
p + q \cdot \lfloor x \rfloor \in [-1/q, q+1/q)\\
p \in [0, q]
\end{matrix}
$$

因此我们可以进行下式的放缩

$$
\begin{aligned}
& \mu_{@\R}\left\{x : \exist p:|qx - p| < \frac{1}{q^{\cdot (1 + \varepsilon)}}\right\}\\
& \le \sum_{p = 0}^q \mu_{@ \R}\left\{x : |qx - p| < \frac{1}{q^{\cdot (1 + \varepsilon)}}\right\}\\
& = (q + 1) \cdot \frac{2}{q^{\cdot(2 + \varepsilon)}} \le \frac{4}{q^{\cdot(1 + \varepsilon)}} 
\end{aligned}
$$

对全体正整数 $q$ 求和, 得到的值不是无穷值, 从而由Borel-Cantelli引理知

$$
\mu_{@\R} \varlimsup_{q \to \infin} \left\{x : \exist p:\left|x - \frac pq\right| < \frac 1 {q^{\cdot (2 + \varepsilon)}}\right\} = 0
$$

也就是说, 要求有无穷多个 $q$ 的情况已经是零测了, 更不要说有无穷多对 $p,q$ 这种更严格的限制了. 

