---
TimeLine: 
=> 20220513--0000000 : 章节已创建
---
| #未完成-正文 | #未完成-习题 |
| ------------ | ------------ |

# § Lebesgue积分

## ::IMPORT

| ENTRY | SYMBOL |
| ----- | ------ |
|       |        |

## ::PRIVATE

$$
\begin{matrix}
L_{(d)} := \LinOn (\R)^{\oplus d}\\
L_{(d)}[\|\cdot\|] :: \Block{(\and)}{\;\;}{
    & \|\cdot\|_{@ L_{(d)}}: L_{(d)}[\S]\to \R[\S]\\
    & \forall x:[1 .. d]\to \R[\S]:
        \|(x_{(1)},x_{(2)}, \cdots,x_{(d)})\| = (\sum_{n=1}^d x_{(n)}^{\cdot 2})^{\cdot 1/2} 
}\\
L_{(d)}[\tau] := \text{NormTop}(L_{(d)})\\
\R[\tau] := L_{(d)}[\tau]\\
\R[{\frak M}] := \sigmaex(\R[\tau])
\end{matrix}
$$

## 支集的定义 [DEF]

\<形式定义\>

$$
\begin{matrix}
\supp(f) := \{f \ne 0\}\\
::: \exist E\text{<set>}: f: E\to \R[\S]
\end{matrix}
$$

## Lebesgue积分的定义 [DEF]

\<形式定义:简单函数\>

$$
\begin{matrix}
& \begin{aligned}
\lebint f \dif\mu := \sum_{c\in \img f} c \cdot \mu (f^{\leftarrow}(\{c\}))
\end{aligned}\\
& \begin{aligned}
    & :::\msr(\mu)\\
    & :::f: \text{MsrSpace}(\mu) \MeasurableTo \R\\ 
    & ::: \card \img f \prec \aleph(\varnothing)\\
\end{aligned}\\
\end{matrix}
$$

\<形式定义:有界,有限支集函数\>

$$
\begin{matrix}
& \begin{aligned}
\lebint f \dif\mu := 
\sup_{@ \R} \left\{ 
    \lebint \phi  \dif \mu:
    \Block{(\and)}{\;\;}{
        & \phi: \text{MsrSpace}(\mu) \MeasurableTo \R\\
        & \phi \le f\\
        & \card \img \phi \prec \aleph(\varnothing)\\
    }
\right\}\\
\end{aligned}\\
& \begin{aligned}
    & :::\msr(\mu)\\
    & :::f: \text{MsrSpace}(\mu) \MeasurableTo \R\\ 
    & ::: \exist M\in ((0, \infin)): |f|,\mu(\supp f) < M\\
\end{aligned}\\
\end{matrix}
$$

\<形式定义:非负函数\>

$$
\begin{matrix}
& \begin{aligned}
\lebint f \dif\mu 
:= \sup_{@ \R} \left\{ 
    \lebint \phi  \dif \mu:
    \Block{(\and)}{\;\;}{
        & \phi: \text{MsrSpace}(\mu) \MeasurableTo \R\\
        & 0 \le \phi \le f\\
        & \exist M\in ((0, \infin)): \phi,\mu(\supp \phi) < M
}\right\}
\end{aligned}\\
& \begin{aligned}
    & :::\msr(\mu)\\
    & :::f: \text{MsrSpace}(\mu) \MeasurableTo \R\\ 
    & :::f \ge 0\\
\end{aligned}\\
\end{matrix}
$$

\<形式定义:可积函数\>

$$
\begin{matrix}
& \begin{aligned}
\lebint f \dif\mu
:= \lebint \frac{|f| + f}{2} \dif \mu - \lebint \frac{|f| - f}{2} \dif \mu
\end{aligned}\\
& \begin{aligned}
    & :::\msr(\mu)\\
    & :::f: \text{MsrSpace}(\mu) \MeasurableTo \R\\ 
    & ::: \lebint |f|\, \dif \mu < \infin\\
\end{aligned}\\
\end{matrix}
$$

\<形式定义:给定集合\>

$$
\begin{matrix}
\begin{aligned}
\lebint_E f \dif\mu := \lebint \Ind_{\in E} \cdot f \dif \mu
\end{aligned}\\
\begin{aligned}
    & ::: \msr(\mu)\\
    & ::: f: \text{MsrSpace}(\mu) \MeasurableTo \R\\ 
    & ::: E \in \dom\mu
\end{aligned}
\end{matrix}
$$

## 有界收敛定理 [THM]

#TODO

## 单调收敛定理 [THM]

#TODO

## Markov 不等式 [THM]

\<形式描述\>

$$
\BlockEndl{
    & \forall \msrspace(X)\\
    & \forall f:X\MeasurableTo \R\\
}{\;\;}{
    & \CondBegin\\
    & f \ge 0\\
    & \CondEnd\\
    & \BlockEndl{
        & \forall \varepsilon \in ((0, \infin))
    }{\;\;}{
        & \varepsilon \cdot\mu_{@ X}(\{f \ge \varepsilon\})\le 
          \lebint_{\{f \ge \varepsilon\}} f \dif \mu_{@ X}\le
          \lebint f \dif \mu_{@ X}\\
    }\\
}
$$

## ::EXPORT

| ENTRY                                                                         | SYMBOL    |
| ------------------------------------------------------------------------------ | --------- |
| [Lebesgue积分的定义](分析-积分-抽象测度上的Lebesgue积分.md#Lebesgue积分的定义%20DEF) | $\lebint$ |
| [支集的定义](分析-积分-抽象测度上的Lebesgue积分.md#支集的定义%20DEF)                 | $\supp$   |

