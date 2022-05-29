---
TimeLine: 
=> 20220512--0000000 : 章节已创建
---
| #未完成-正文 | #未完成-习题 |
| ------------ | ------------ |

# 有限维实线性空间上的Lebesgue测度

> 由于我们知道有限维的实线性空间都是同构的, 我们不妨就来讨论 $\LinOn(\R)^{\oplus d}$ 上的情况. 

## :: PRIVATE

$$
\begin{matrix}
L_{(d)} := \LinOn (\R)^{\oplus d}\\
L_{(d)}[\|\cdot\|] :: \Prop{(\and)}{\;\;}{
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
\text{cube}_{@ L}(E) := \Prop{(\and)}{\;\;}{
    & d :: L = L_{(d)}\\
    & \exist a: [1 .. d] \to \R[\S]: \exist h \in \R[\S]: 
        E = \bigtimes_{k = 1}^d [[a_{(k)}, a_{(k)}+h]]
}\\
:::\exist d\in [1 .. ]: L = L_{(d)}\\
\\
\text{CubeSize}_{@L}(E)::\Prop{(\and)}{\;\;}{
    & h::\exist a: [1 .. d] \to \R[\S]: h \in \R[\S]\and 
        E = \bigtimes_{k = 1}^d [[a_{(k)}, a_{(k)}+h]]\\
    & \text{CubeSize}_{@L}(E) = h^{\cdot 3}
}\\
:::\text{cube}_{@ L}(E)\\
:::\exist d\in [1 .. ]: L = \LinOn(\R)^{\oplus d}\\
\end{matrix}
$$

## Lebesgue外测度的定义

$$
\m_{*(d)}::\Prop{(\and)}{\;\;}{
    & \m_{*(d)}: \Pow(L_{(d)}[\S])\to [[0, \infin]]\\
    & \m_{*(d)}(E) = \inf \left\{
    \sum_{n\in [1 ..]} \text{CubeSize}(Q_{(n)}):
    \Prop{(\and)}{\;\;}{
        & Q:[1 ..]\to \Pow(E)\\
        & \bigcup_{n\in [1 ..]} Q_{(n)} \supe E\\
        & \text{cube}_{@ L_{(d)}}(Q_{(n)})
    }
    \right\}
}
$$

## Lebesgue测度的定义

$$
\m_{(d)} :: \Prop{(\and)}{\;\;}{
    & {\cal M} := \left\{
        E\in \Pow(L_{(d)}[\S]):
        \forall \varepsilon \in ((0, \infin)):
        \exist O \in L_{(d)}[\tau]:
        \Prop{(\and)}{\;\;}{
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

\<REMARK\>

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

## 紧集的边界

\<问题描述:1\>

设 $E$ 是 $L_{(d)}$ 中一紧集, 而 $O_{(n)} := \{x \in L_{(d)}[\S]: \inf\{d(x, e): e\in E\} < 1/n\}$ 是离 $E$ 的距离不超过 $1/n$ 的点组成的开集. 

试证明 $\lim\limits_{@\R;n\to \infin} \m_{(d)}(O_{(n)}) = \m_{(d)}(E)$

\<问题解答:1\>

已知对任一 $\varepsilon$ 有相应的开集 $O$ 使得 $\m_{(d)}(O \diagdown E) < \varepsilon$ 且 $O\supe E$ . 而 $O^\complement$ (关于全集取补), 是个闭集. 

由度量空间章节当中的讨论, 因为 $E$ 紧而 $O^\complement$ 闭, $O^\complement$ 与 $E$ 之间存在 $\delta >0$ 使得 $\inf\limits_{@ \R}\Big\{d(f, e): f\in O^\complement \and e \in E\Big\} > \delta$

从而存在足够小的 $1/n$ 使得 $1/n < \delta$, 这说明 $O_{(n)} \cap O^\complement = \varnothing$, 亦即 $O_{(n)} \sube O$

从而 $\m_{(d)}(E) = \inf\limits_{@ \R}\Big\{\m_{(d)}(O): O\supe E \and O\ is\ open\Big\} \ge \lim\limits_{@\R;n\to \infin} \m_{(d)}(O_{(n)}) \ge \m_{(d)}(E)$

\<问题描述:2\>

试举例证明, 当 $E$ 是闭集但没有界, 或者 $E$ 是有界的开集时, 上述结论 $\lim\limits_{@\R; n \to \infin}  \m_{(d)}(O_{(n)}) = \m_{(d)}(E)$ 可能不成立

\<问题解答:2\>

$E$ 是闭集但没有界的例子很好举, 例如 $L_{(d)}$ 中的 $\N[\S]$ , 任意的 $n\in \Z[\S]$ 都使得 $O_{(n)}$ 的测度无穷大. 

有界的开集比较困难. 可以考虑的是类Cantor集的补的构造. 

设区间 $C_{(0)} = [[0, 1]]$. 并设 $C_{(n+1)}$ 是每个 $C_{(n)}$ 中取走每个连续闭区间中间长为 $\xi_{(n)}$ 的区间得到的集合. 

取 $E=[[0, 1]] \diagdown C_{(\infin)}$ , 则 $C_{(\infin)}$ 的测度为 $1 - \sum_{n = 0}^\infin 2^{\cdot n}\cdot \xi_{(n)}$ . 从而对任意 $m$ 都有 $\m_{(1)}(O_{(n)}) \ge \m_{(1)}(C_{(\infin)}) +  \m_{(1)}(E)$ 

要使得 $\m_{(1)}(C_{(\infin)}) > 0$ 不妨取 $\xi_{(n)} = 4^{\cdot -n}$

## 开集的边界

\<问题描述\>

试举出一例 $L_{(d)}$ 中开集的边界点具备正测度的例子. 

\<问题解答\>

设区间 $C_{(0)} = [[0, 1]]$. 并设 $C_{(n+1)}$ 是每个 $C_{(n)}$ 中取走每个连续闭区间中间长为 $\xi_{(n)}$ 的区间得到的集合. 

每个 $[[0, 1]]$ 中的点都是 $C_{(\infin)}$ 的极限点, 因为每个点都可以用折半法趋近, 而对每个 $n$ , 折半法得到的序列中第 $n$ 项和这个点的距离不超过 $2^{\cdot -n}$

从而 $[[0, 1]]\diagdown C_{(\infin)}$ 是所求作的集合. 

## 