---
TimeLine: 
=> 20220513--0000000 : 章节已创建
---
| #未完成-正文 | #未完成-习题 |
| ------------ | ------------ |

# Lebesgue积分

## ::PRIVATE

$$
\begin{matrix}
L_{(d)} := \LinOn (\R)^{\oplus d}\\
L_{(d)}[\|\cdot\|] :: \Field{(\and)}{\;\;}{
    & \|\cdot\|_{@ L_{(d)}}: L_{(d)}[\S]\to \R[\S]\\
    & \forall x:[1 .. d]\to \R[\S]:
        \|(x_{(1)},x_{(2)}, \cdots,x_{(d)})\| = (\sum_{n=1}^d x_{(n)}^{\cdot 2})^{\cdot 1/2} 
}\\
L_{(d)}[\tau] := \text{NormTop}(L_{(d)})\\
\R[\tau] := L_{(d)}[\tau]\\
\R[{\frak M}] := \sigma(\R[\tau])
\end{matrix}
$$

## 支集的定义

$$

$$

## 实值函数的绝对值



## Lebesgue积分的定义

\<形式定义:全域积分\>

$$
\begin{matrix}
\begin{aligned}
\lebint f \dif\mu
\left[\;\begin{aligned}
    & := \sum_{c\in \img f} c \cdot \mu (f^{\leftarrow}(\{c\}))
        && ::: \card \img f \prec \aleph(\varnothing)\\
    & := \sup_{@ \R} \left\{ 
        \lebint \phi  \dif \mu:
        \Field{(\and)}{\;\;}{
            & \phi: \text{MsrSpace}(\mu) \MeasurableTo \R\\
            & \phi \le f\\
            & \card \img \phi \prec \aleph(\varnothing)\\
        }
    \right\}
        && ::: \exist M\in ((0, \infin)): |f|,\mu(\supp f) < M\\
    & := \sup_{@ \R} \left\{ 
        \lebint \phi  \dif \mu:
        \Field{(\and)}{\;\;}{
            & \phi: \text{MsrSpace}(\mu) \MeasurableTo \R\\
            & 0 \le \phi \le f\\
            & \exist M\in ((0, \infin)): \phi,\mu(\supp \phi) < M
        }
    \right\}
        && :::  f \ge 0\\
    & := \lebint \frac{|f| + f}{2} \dif \mu - \lebint \frac{|f| - f}{2} \dif \mu
        && ::: \lebint |f|\, \dif \mu < \infin\\
\end{aligned}\right.
\end{aligned}
\\
\begin{aligned}
    & :::f: \text{MsrSpace}(\mu) \MeasurableTo \R\\ 
\end{aligned}
\end{matrix}
$$

\<形式定义:给定集合\>

$$
\begin{matrix}
\begin{aligned}
\lebint_E f \dif\mu := \lebint \Ind_{\in E} \cdot f \dif \mu
\end{aligned}\\
\begin{aligned}
    & ::: f: \text{MsrSpace}(\mu) \MeasurableTo \R\\ 
    & ::: E \in \dom\mu
\end{aligned}
\end{matrix}
$$
