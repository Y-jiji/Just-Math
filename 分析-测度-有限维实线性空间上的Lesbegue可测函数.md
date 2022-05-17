---
TimeLine: 
=> 20220512--0000000 : 章节已创建
---
| #未完成-正文 | #未完成-习题 |
| ------------ | ------------ |

# 有限维实线性空间上的Lesbegue可测函数

## 可测的充要条件

\<文字描述\>

由于我们知道, 实函数可测

\<形式描述\>

$$
$$

## 可测函数的算术运算

## 可测函数列的上,下界与极限



# 习题

## 分片连续

\<问题描述\>

设定义域为 $\R[\S]^{\times 2}$ 的实值函数 $f(x, y)$ 是一个分片连续的函数, 这是说对任意固定的 $x$, 函数 $y \mapsto f(x, y)$ 是连续的, 而同样地, 对任意固定的 $y$, 函数 $x \mapsto f(x, y)$ 是连续的. 

试证明, $f(x, y)$ 是可测的. 

\<问题解答\>

根据提示, 设 $\phi_{(n)}(x, y) = f(\frac{\lfloor n \cdot x\rfloor}{n}, y)$ , 则在 $n\cdot x$ 能被 $n$ 整除时, $\phi_{(n)}(x, y)$ 在和 $f(x, y)$ 是完全一致的. 

而对任意开集 $O$, 有 $\hat\phi_{(n)}^{\diamond -}(O)$ 是可测集, 因为它相当于是可数个方块的拼接. 
$$
\forall O\in \tau(\LinOn(\R)^{\oplus2}):
    \hat\phi_{(n)}^{\diamond -}(O) = 
        \bigcup_{k\in [..]} 
        \left\{(x,y):\lfloor n \cdot x\rfloor=k\and\phi_{(n)}(\frac{k}{n}, y)\in O\right\}
$$
而对任意 $x, y$, 可证 $\forall \varepsilon \in ((0, \infin)):(n \to \infin)_{@\N}: |\phi_{(n)}(x, y) - f(x, y)| < \varepsilon$

这是因为对给定的 $y$ 有 $f(x, y)$ 对 $x$ 连续. 在给定 $y$ 时, 由连续的定义, 对给定的 $x$ 总存在足够小的 $\delta$, 使得任意 $x'$ 满足 $|x' - x| < \delta$ 使得 $|f(x',y)-f(x,y)|< \varepsilon$ 而总是存在足够大的 $n$ 使得 $|\frac{\lfloor n\cdot x\rfloor}{n}-x|<\delta$

从而 $f(x, y) = \lim\limits_{@\R;(n \to \infin)_{@\N}} \phi_{(n)}(x, y)$ , $f(x,y)$ 可测. 

