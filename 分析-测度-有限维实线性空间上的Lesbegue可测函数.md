---
TimeLine: 
=> 20220512--0000000 : 章节已创建-
---
| #未完成-正文 | #未完成-习题 |
| ------------ | ------------ |

# 有限维实线性空间上的Lebesgue可测函数

> 参考材料: Elias M. Stein, Rami Shakarchi 分析丛书第 3 卷

## ::PRIVATE

$$
\begin{matrix}
L_{(d)} := \LinOn (\R)^{\oplus d}\\
L_{(d)}[\|\cdot\|] :: \Field{(\and)}{\;\;}{
    & \|\cdot\|_{@ L_{(d)}}: L_{(d)}[\S]\to \R[\S]\\
    & \forall x:[1 .. d]\to \R[\S]:
        \|(x_{(1)},x_{(2)}, \cdots,x_{(d)})\| = (\sum_{n=1}^d x_{(n)}^{\cdot 2})^{\cdot 1/2} 
}\\
L_{(d)}
\left[\begin{aligned}
    \tau & := \text{NormTop}(L_{(d)})\\
    {\frak M} & := \dom \m_{(d)}\\
    \mu & := \m_{(d)}\\
\end{aligned}\right]\\
\R[\tau] := \bigg\{O : \forall x\in O: \exist \delta \in ((0, \infin)): ((x-\delta, x+\delta))\sube O\bigg\}\\
\R[{\frak M}] := \sigma(\R[\tau])\\
{\mathscr A} := % 函数代数 %
\end{matrix}
$$


## 可测函数的算术运算

\<形式描述\>

$$
\forall f, g : L_{(d)} \MeasurableTo \R: (f + g),\, (f \cdot g): L_{(d)} \MeasurableTo \R 
$$

\<RMK\>

本章中我们说 $f$ 可测是说 $f: L_{(d)} \to \R$ 是可测的, 注意 $\R$ 上的搭的是Borel测度而不是Lebesgue测度. 

## 可测函数列的上,下界与极限

\<文字描述\>

可测函数列的上,下界与上,下极限都是可测函数. 

特别地, 当上下极限相等时, 其极限也是可测函数. 

\<形式描述\>

$$
\forall f: [1 .. ] \to L_{(d)} \MeasurableTo \R: 
\Field{(\and)}{\;\;}{
    & \sup_{@{\mathscr A}}\{f_{(n)} : n \in [1 .. ]\}: L_{(d)} \MeasurableTo \R\\
    & \inf_{@{\mathscr A}}\{f_{(n)} : n \in [1 .. ]\}: L_{(d)} \MeasurableTo \R\\
    & \varlimsup_{@{\mathscr A}; n \to \infin} f_{(n)}: L_{(d)} \MeasurableTo \R\\ 
    & \varliminf_{@ {\mathscr A};n \to \infin} f_{(n)}: L_{(d)} \MeasurableTo \R
}
$$

\<形式证明\>

#TODO

## Egrov定理

\<文字描述\>

可测函数列几乎处处收敛, 等价于可测函数列能在测度任意小的集合外一致收敛. 

\<形式描述\>

$$
\FieldEndl{
    & \forall D \MsrSube L_{(d)}\\
    & \forall f: [1 .. n] \to D \MeasurableTo \R\\
}{\;\;}{
    & 
}
$$

\<形式证明\>

$$
$$

## Lusin定理

***

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

## 