---
TimeLine: 
=> 20220512--0000000 : 章节已创建
---
| #未完成-正文 | #未完成-习题 |
| ------------ | ------------ |

# 有限维实线性空间上的Lesbegue测度

> 由于我们知道有限维的实线性空间都是同构的, 我们不妨就来讨论 $\LinOn(\R)^{\oplus d}$ 上的情况. 

## :: PRIVATE

$$
\begin{matrix}
L_{(d)} := \LinOn (\R)^{\oplus d}\\
L_{(d)}[\|\cdot\|] :: \Field{(\and)}{\;\;}{
    & \|\cdot\|_{@ L_{(d)}}: L_{(d)}[\S]\to \R[\S]\\
    & \forall x:[1 .. d]\to \R[\S]:
        \|(x_{(1)},x_{(2)}, \cdots,x_{(d)})\| = (\sum_{n=1}^d x_{(n)}^{\cdot 2})^{\cdot 1/2} 
}\\
L_{(d)}[\tau] := \text{NormTop}(L_{(d)})
\end{matrix}
$$

## 方格的定义

$$
\begin{matrix}
\text{cube}_{@ L}(E) := \Field{(\and)}{\;\;}{
    & d :: L = L_{(d)}\\
    & \exist a: [1 .. d] \to \R[\S]: \exist h \in \R[\S]: 
        E = \bigtimes_{k = 1}^d [[a_{(k)}, a_{(k)}+h]]
}\\
:::\exist d\in [1 .. ]: L = L_{(d)}\\
\\
\text{CubeSize}_{@L}(E)::\Field{(\and)}{\;\;}{
    & h::\exist a: [1 .. d] \to \R[\S]: h \in \R[\S]\and 
        E = \bigtimes_{k = 1}^d [[a_{(k)}, a_{(k)}+h]]\\
    & \text{CubeSize}_{@L}(E) = h^{\cdot 3}
}\\
:::\text{cube}_{@ L}(E)\\
:::\exist d\in [1 .. ]: L = \LinOn(\R)^{\oplus d}\\
\end{matrix}
$$

## Lesbegue外测度的定义

$$
\m_{*(d)}::\Field{(\and)}{\;\;}{
    & \m_{*(d)}: \Pow(L_{(d)}[\S])\to [[0, \infin]]\\
    & \m_{*(d)}(E) = \inf \left\{
    \sum_{n\in [1 ..]} \text{CubeSize}(Q_{(n)}):
    \Field{(\and)}{\;\;}{
        & Q:[1 ..]\to \Pow(E)\\
        & \bigcup_{n\in [1 ..]} Q_{(n)} \supe E\\
        & \text{cube}_{@ L_{(d)}}(Q_{(n)})
    }
    \right\}
}
$$

## Lesbegue测度的定义

$$
\m_{(d)} :: \Field{(\and)}{\;\;}{
    & {\cal M} := \left\{
        E\in \Pow(L_{(d)}[\S]):
        \forall \varepsilon \in ((0, \infin)):
        \exist O \in L_{(d)}[\tau]:
        \Field{(\and)}{\;\;}{
            & \m_{*(d)}(O \diagdown E) < \varepsilon\\
            & O \supe E\\
        }
    \right\}\\
    & \m_{(d)} = \m_{*(d)} \bigg|_{\cal M}
}
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
\m_{(1)}\left\{
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
& \m_{(1)}\left\{x : \exist p:|qx - p| < \frac{1}{q^{\cdot (1 + \varepsilon)}}\right\}\\
& \le \sum_{p = 0}^q \m_{(1)}\left\{x : |qx - p| < \frac{1}{q^{\cdot (1 + \varepsilon)}}\right\}\\
& = (q + 1) \cdot \frac{2}{q^{\cdot(2 + \varepsilon)}} \le \frac{4}{q^{\cdot(1 + \varepsilon)}} 
\end{aligned}
$$

对全体正整数 $q$ 求和, 得到的值不是无穷值, 从而由Borel-Cantelli引理知

$$
\m_{(1)} \varlimsup_{q \to \infin} \left\{x : \exist p:\left|x - \frac pq\right| < \frac 1 {q^{\cdot (2 + \varepsilon)}}\right\} = 0
$$

也就是说, 要求有无穷多个 $q$ 的情况已经是零测了, 更不要说有无穷多对 $p,q$ 这种更严格的限制了. 

## 两紧集测度的中值

\<问题描述\>

给定 $\LinOn(\R)^{\oplus d}$ 上的两个紧集 $E_1 \sube E_2$, 其测度分别为 $\m_{(d)}(E_1) = a, \m_{(d)}(E_2) = b$, 且 $a < b$. 
试证明对任实 $c$ 使得 $a < c < b$, 存在另一紧集 $E$ 使得 $E_1\sube E \sube E_2$ 而且 $\m_{(d)}(E) = c$

\<问题解答\>

在 $\LinOn(\R)^{\oplus d}$ 中, 对任一可测集总能找到开包含 $O$ 使得 $\m_{(d)}(O \diagdown E_1)$ 充分小. 由此可知能找到充分小的开集 $O$ 使得 $\m_{(d)}(O) < c$

此时 $E_2 \diagdown O$ 是一个紧集, 而且其任一子集与 $E_2$ 不交. 只要证得存在紧集 $G \sube E_2 \diagdown O$ 使得 $\m_{(d)}(G) + \m_{(d)}(E_1) = c$ 即可. 

设函数 $f: ((0, \infin)) \to ((0, \infin))$

$$
f(x) = \m_{(d)}(E_2 \diagdown O \cap [[-x, x]]^{\times d})
$$

若证得 $f$ 连续, 即由中值定理得存在 $x$ 使得 $0 < f(x) = c - a < b - a$

而 $E = G \cup E_1 =  E_2 \diagdown O \cap [[-x, x]]^{\times d} \cup E_1$ 即为所求的紧集. 

下面来证 $f$ 连续, 只要观察到下述事实即得证

$$
\begin{aligned}
|f(x) - f(x')| 
& = |\m_{(d)}(E_2 \diagdown O \cap [[-x, x]]^{\times d}) - \m_{(d)}(E_2 \diagdown O \cap [[-x', x']]^{\times d})| \\
& \le \m_{(d)}((
    E_2 \diagdown O \cap [[-x, x]]^{\times d}) 
    \triangle 
    (E_2 \diagdown O \cap [[-x', x']]^{\times d}))\\
& \le \m_{(d)}([[-x, x]]^{\times d} \diagdown [[-x', x']]^{\times d})\\
& \le |x^{\cdot d} - x'^{\cdot d}|
\end{aligned}
$$

\<RMK\>

看Stein给的提示的时候蒙了半天, 一直在想 $f$ 应该是会有不连续的(总觉得它应该长得和分布函数一样), 不得已翻了答案, 结果发现它就是按提示的方法做的...到反应过来$\R^d$上的测度没有跳跃点花了半分钟, 这波属于是复习综合症典型症状了. 

## 夹逼知可测

\<问题描述\>

给定 $\LinOn(\R)^{\oplus d}$ 上的两个可测集 $A \sube B$, 其测度有限且相等, 即 $\m_{(d)}(A)=\m_{(d)}(B)< \infin$ 

试证明假若集合 $E$ 使得 $A \sube E \sube B$, 则 $E$ 也可测

\<问题解答\>

只要知道 $\m_{*(d)}(E \diagdown A) \le \m_{(d)}(B \diagdown A) = 0$ 即知 $E\diagdown A$ 零测从而可测, 因此 $E= (E \diagdown A)\cup A$ 可测. 

## 若由内部闭近似定义可测

\<问题描述\>

将 $E$ 可测定义为: 存在闭集 $F$ 使得 $\m_{*(d)}(E\diagdown F)$ 充分小. 

试证明这一定义和原来的定义等价. 

\<问题解答\>

设全集为 $\Omega$, 对 $A$ 全集取补记作 $A^\complement$

不妨记 $F^\complement$ 为 $O$ . 因为 $E\diagdown F = O \diagdown E^\complement$, 而已知 $E$ 可测和 $E^\complement$ 等价, 这两个定义的等价就是显然的. 

$$
\begin{matrix}
\forall \varepsilon \in ((0, \infin)):
\exist open\, set\,O:\m_{*(d)}(O \diagdown E^\complement) < \varepsilon\\
\forall \varepsilon \in ((0, \infin)):
\exist closed\, set\,F:\m_{*(d)}(E \diagdown F) < \varepsilon\\
\end{matrix}
$$

## 枚举有理数

\<问题描述\>

试找到一个序列 $\{r_{(n)}\}$ 枚举**全部**有理数, 并且: 

$$
\bigcup_{n =1}^\infin \left(\left(r_{(n)} - \frac 1n, r_{(n)} + \frac 1n\right)\right)
$$
并不覆盖整个实数集 $\R[\S]$

\<问题解答\>

形式化地, $\forall q \in \Q[\S]: \exist n\in [1 ..]: r_{(n)} = q$ . 

不妨只考虑非负有理数. 

取定 $r_{(n)}$ 后, 可以在 $n$ 为奇数时取非负的部分, $n$ 为偶数时取负的部分, 这样区间只可能更短而非更长, 故只考虑非负有理数不失一般性. 

依 $(p+q, p)$ 的字典序, 将互素正整数对 $(p,q)$ 外加 $(0, 1)$ 从小到大排列, 使得 $n$ 为非完全平方数时
$$
r_{(n)} = \frac pq + 5
$$
而 $n$ 为完全平方数时, 将 $p \in [1 .. 5 \cdot q - 1]$ 的互素正整数对 $(p, q)$ 外加 $(0, 1)$ 也依 $(p+q, p)$ 的字典序从小到大排列, 取
$$
r_{(n)} = \frac pq
$$
可证对任意有理数, $r_{(n)}$ 都能在有限步内取到, 并且观察到 $[0, 4]$ 内各区间的测度之和总是小于 $\cfrac{\pi^2}3$, 故不可能充满区间 $[0, 4]$. 

从而我们找到了一种枚举全体非负有理数的办法, 使得 $\left(\left(r_{(n)} - \frac 1n, r_{(n)} + \frac 1n\right)\right)$ 的并不充满实数集. 

剩下的只要对负有理数做相应调整即可. 
