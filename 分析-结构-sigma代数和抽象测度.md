---
TimeLine: 
=> 20220328--20220329 : 抄了 Stein 第三册中抽象测度的第一节, sigma代数的等价条件还留了一部分没证. 
=> 20220331--20220331 : 添加了Borel代数的定义. 
---

| #已完成-正文 | #未完成-习题 |
| ------------ | ------------ |

# 抽象测度

> 本节虽然有较多的定义, 但是并不繁重, 只要掌握最重要的Caratheodory条件即可. 
>
> 在之后的章节中将会讨论更多测度相关的对象, 例如积测度, 概率论中独立性的构造等等, 这些是比较困难的部分. 

## ::MACRO

| IMPORT                                              | DESCRIPTION                                                                                                                            |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [集合的定义](模型-ZFC公理系统#集合的定义)           | 属于关系 $\in$ <br /> 集合的描述法 $\{:\}$ <br /> 集合的列举法 $\{\}$                                                                  |
| [集合的运算](模型-ZFC公理系统#集合的运算)           | 包含 $\sube$ <br /> 交集 $\cup$ <br /> 并集 $\cap$ <br /> 差集 $\diagdown$ <br /> 多个集合的并 $\bigcup$ <br /> 多个集合的交 $\bigcap$ |
| [幂集的定义](模型-ZFC公理系统#幂集的定义)           | 幂集 ${\frak P}$                                                                                                                       |
| [ZFC集合模型](模型-ZFC公理系统#ZFC集合模型)         | 集合的类型签名 $\text{<set>}$                                                                                                          |
| [拓扑空间的定义](分析-结构-拓扑空间#拓扑空间的定义) | 拓扑空间的类型签名 $\text{<top-space>}$ <br /> 拓扑的记号 $\tau$                                                                               |

## 半代数, 集代数和$\sigma$代数

半代数是指对交封闭, 而对全集取补则能写成有限个集合的无交并的集族. 

$$
{\cal S}\text{<semi-algebra>}:=
\Field{(\and)}{\;\;}{
    & \\
    & {\cal S}\text{<set>}\\
    & \forall E\in {\cal S}:E\text{<set>}\\
    \\
    & \Omega := \bigcup_{E\in {\cal S}}E\\
    & \Omega,\varnothing \in {\cal S}\\
    \\
    & {\cal S}\supe \bigg\{E\cap F: E,F\in {\cal S} \bigg\}\\
    \\
    & \text{DISTINCT}({\cal A}):=\forall E,E'\in {\cal A}:E\cap E'=\varnothing \or E=E'\\\\
    & \forall E\in {\cal S}: 
        \exist {\cal A} \in {\frak P}({\cal S}):
        \Field{(\and)}{\;\;}{
            & \text{card } {\cal A} < \aleph_0\\
            & E = \bigcup_{F\in {\cal A}}F\\
            &  \text{DISTINCT}({\cal A})\\
        }\\\\
}
$$

集代数是指对并和对全集取补封闭的集族. (下式中 $\Omega$ 被称为这个集代数的全集) 
$$
{\cal S}\text{<set-algebra>}:=
\Field{(\and)}{\;\;}{
    & \\
    & {\cal S}\text{<set>}\\
    & \forall E\in {\cal S}:E\text{<set>}\\
    \\
    & \Omega := \bigcup_{E\in {\cal S}}E\\
    & \Omega,\varnothing \in {\cal S}\\
    \\
    & {\cal S}\supe \bigg\{\Omega\diagdown E : E\in {\cal S}\bigg\}\\
    & {\cal S}\supe \bigg\{E\cup F: E,F\in {\cal S} \bigg\}\\\\
}
$$

$\sigma$代数则是指对可列并和对全集取补运算封闭的集族. 
$$
{\cal S}\text{<}\sigma\text{-algebra>}:=
\Field{(\and)}{\;\;}{
    & \\
    & {\cal S}\text{<set>}\\
    & \forall E\in {\cal S}:E\text{<set>}\\
    \\
    & \Omega := \bigcup_{E\in {\cal S}}E\\
    & \Omega,\varnothing \in {\cal S}\\
    \\
    & {\cal S}\supe \bigg\{\Omega\diagdown E : E\in {\cal S}\bigg\}\\
    & {\cal S}\supe \left\{
        \bigcup_{E\in {\cal A}} E: 
        {\cal A} \in {\frak P}({\cal S})
        \and \text{card } {\cal A} = \aleph_0
    \right\}\\\\
}
$$

## $\sigma$代数的等价条件

$$
\forall {\cal S}\text{<set-algebra>}:
\Field{(\Leftrightarrow)}{\;\;}{
    & {\cal S}\text<\sigma\text{-algebra>}\\\\
    & \FieldEndl{
        & \forall \{E_n\in {\cal S}:n\in \N\}:(\Rightarrow)
    }{\;\;}{
        & \CondBegin\\
        & \forall n\in \N:E_n\sube E_{n+1}\\
        & \CondEnd\\
        & \bigcup_{n\in \N} E_n\in {\cal S}
    }\\\\
    & \FieldEndl{
        & \forall \{E_n\in {\cal S}:n\in \N\}:(\Rightarrow)
    }{\;\;}{
        & \CondBegin\\
        & \forall n\in \N:E_n\supe E_{n+1}\\
        & \CondEnd\\
        & \bigcap_{n\in \N} E_n\in {\cal S}
    }\\\\
}
$$

证明: 由$\sigma$代数得到两类单调性是颇为容易的, 这是因为对单调增列, 可列并就相当于 $\lim\limits_{n\to\infin}$; 对单调减列, 可列交就相当于 $\lim\limits_{n\to \infin}$; 而对任意 ${\cal S}$ 中的集合列, 任取前 $N$ 项的有限并, 有限交, 即可构造得到单调列, 进而得出可列并, 可列交也属于 $\cal S$ 的结论. 

## $\sigma$扩张的定义

一个集合的 $\sigma$ 扩张是指包含这个集合的最小 $\sigma$ 代数. 
$$
\begin{matrix}
\sigma({\cal A})::
    \Field{(\and)}{\;\;}{
        \\
        & \FieldEndl{
            \forall {\cal S}:(\Rightarrow)
        }{\;\;}{
            & \CondBegin\\
            & {\cal S} \supe {\cal A}\\
            & {\cal S}\text<\sigma\text{-algebra>}\\
            & \CondEnd\\
            & \sigma({\cal A})\sube {\cal S}\\
        }\\
        \\
        & \sigma({\cal A})\text<\sigma\text{-algebra>}\\
        \\
        & \sigma({\cal A})\supe {\cal A}\\
        \\
    }\\\\
\left.\begin{aligned}
    & ::: {\cal A}\text{<set>}\\
    & ::: \forall E\in {\cal A}:E\text{<set>}\\
\end{aligned}\right.
\end{matrix}
$$

## Borel 代数

Borel 代数是指对拓扑的 $\sigma$ 扩张. 

$$
{\frak B}_{\$X}:=\sigma(\tau_X):::X\text{<top-space>}
$$

## 外测度的定义

外测度(exterior measure)是指具有下可加性的集函数. 
$$
\begin{matrix}
\mu\text{<ex-measure>}:=
\Field{(\and)}{\;\;}{
    & \\
    & \mu:S\to [0,+\infin]\\
    & \mu(\varnothing)=0\\
    & \\
    & \FieldEndl{\forall E,F\in S:(\Rightarrow)}{\;\;}{
        & \CondBegin\\
        & E\sube F\\
        & \CondEnd\\
        & \mu(E)\le \mu(F)
    }\\
    & \\
    & \forall \{E_n\in S:n\in \N\}:
        \mu\left(\bigcup_{n \in \N} E_n\right)\le \sum_{n \in \N} \mu(E_n)\\
    & \\
}\\
\left.\begin{aligned}
    & :::S\text<\sigma\text{-algebra>}
\end{aligned}\right.
\end{matrix}
$$

## 测度的定义

$$
\begin{matrix}
\mu\text{<measure>}:=
\Field{(\and)}{\;\;}{
    & \\
    & \mu:S\to [0,+\infin]\\
    & \mu(\varnothing)=0\\
    & \\
        & \FieldEndl{\forall E,F\in S:(\Rightarrow)}{\;\;}{
        & \CondBegin\\
        & E\sube F\\
        & \CondEnd\\
        & \mu(E)\le \mu(F)
    }\\
    & \\
    & \FieldEndl{\forall \{E_n\in S:n\in \N\}:(\Rightarrow)}{\;\;}{
        & \CondBegin\\
        & \forall n,m\in \N:n\ne m\Rightarrow E_n\cap E_m=\phi\\
        & \CondEnd\\
        & \mu\left(\bigcup_{n \in \N} E_n\right)=\sum_{n \in \N} \mu(E_n)
    } \\
    & \\
}\\\\
\begin{aligned}
    & :::S\text<\sigma\text{-algebra>}
\end{aligned}
\end{matrix}
$$

## 测度空间的定义

一个集合与其上的可测集和测度合称**测度空间**: 

- 这个集合被称为这个测度空间的基底, 基底集合中的元素称为测度空间中的点. 
- 可测集是指以这个集合为全集的$\sigma$代数, 测度的定义域是这个集合. 

$$
X\text{<measure-space>}:=
\Field{(\and)}{\;\;}{
    & \\
    & X\text{<set>}\\\\
    & {\frak M}_{\$}\\
    & {\frak M}_{X}\in {\frak P}({\frak P}(X))\\
    & X=\bigcup_{E\in {\frak M}_X}E\\
    & {\frak M}_{X}\text<\sigma\text{-algebra}\text>\\\\
    & \mu_{\$}\\
    & \mu_{X}:{\frak M}_{X}\to [0,+\infin]\\
    & \mu_{X}\text{<measure>}\\\\
}
$$

## Caratheodory 条件 (分离条件)

Caratheodory 条件, 是指由一个集合产生的二分划使得给定外测度满足二元的可加性. 
$$
\begin{matrix}
\text{Carath}_{X,\,\mu_*}
    :=\bigg\{
        E\in {\frak P}(X):
            \forall A\in {\frak P}(X):
            \mu_*(A\cap E)+\mu_*(A \diagdown E)
            =\mu_*(A)
    \bigg\}\\
\left.\begin{aligned}
    & :::X\text{<set>}\\
    & :::\mu_*:{\frak P}(X)\to [0,+\infin]\\
    & :::\mu_*\text{<ex-measure>}
\end{aligned}\right.
\end{matrix}
$$
RMK: 注意是用给定的集合分划其他集合, 而不是反过来. 

满足 Caratheodory 条件的集族构成$\sigma$代数. 不仅如此, 如果把外测度限制到这一集族上, 我们将得到一个测度. 
$$
\FieldEndl{
    & \forall X\text{<set>}\\
    & \forall \mu:{\frak P}(X)\to [0,+\infin]
}{\;\;}{
    & \CondBegin\\
    & \mu\text{<ex-measure>}\\
    & \CondEnd\\
    & {\cal M}:=\text{Carath}_{X,\,\mu}\\
    & {\cal M}\text<\sigma\text{-algebra>}\\
    & \mu|_{\cal M}\text{<measure>}
}
$$

证明: 这里采取一种步骤式的证明方法, 我们先证明上述的 ${\cal M}$ 是一个集代数. 

$$
\FieldEndl{
    & \forall X\text{<set>}:\\
    & \forall \mu:{\frak P}(X)\to [0,+\infin]:(\Rightarrow)
}{\;\;}{
    & \CondBegin\\
    & \mu\text{<ex-measure>}\\
    & \CondEnd\\
    & {\cal M}:=\text{Carath}_{X,\,\mu}\\
    \\
    & \forall A\in {\frak P}(X): \mu(A\cap \varnothing)+\mu(A\diagdown \varnothing)=\mu(A)\\
    & {\cal M}\supe \Big\{X,\varnothing\Big\}\\
    \\
    & \FieldEndl{
        & \forall E\in {\cal M}:
            \forall A\in {\frak P}(X):
        (\and)}
    {\;\;}{
        & \mu(A\diagdown E)=\mu(A\cap (X\diagdown E))\\
        & \mu(A\cap E)=\mu(A\diagdown (X\diagdown E))
    }\\
    & {\cal M}\supe \Big\{
        X \diagdown E: 
        E \in {\cal M}
    \Big\}\\
    \\
    & E^{\complement}:=X\diagdown E\\
    \\
    & \FieldEndl{
        & \forall E,F\in {\cal M}:\forall A\in {\frak P}(X):(\Rightarrow)
    }{\;\;}{
        & \CondBegin\\
        & \mu(A\cap E\cap F)+\mu(A\cap (E\cap F)^\complement)\\
        & = \mu(A\cap E\cap F)
            + \mu(A \cap E \cap F^\complement)
            + \mu(A \cap E^\complement)\\
        & = \mu (A \cap E) + \mu(A \cap E^\complement)
          = \mu (A)\\
        & \CondEnd\\
        & E\cap F \in {\cal M}
    }\\
    \\
    & \forall E,F\in {\cal M}:
        E\cup F
        = (E^\complement\cap F^\complement)^\complement\in {\cal M}\\
    & {\cal M}\text{<set-algebra>}
}
$$

再说明 $\mu$ 在无交可列并情况下的运算性质, 于此同时证出 ${\cal M}$ 是 $\sigma$ 代数. 

$$
\FieldEndl{
    & \forall X\text{<set>}\\
    & \forall \mu:{\frak P}(X)\to [0,+\infin]
}{\;\;}{
    & \CondBegin\\
    & \mu\text{<ex-measure>}\\
    & \CondEnd\\
    & {\cal M}:=\text{Carath}_{X,\,\mu}\\
    & {\cal M}\text{<set-algebra>}\\
    \\
    & \FieldEndl{
        & \forall \{E_n\in {\cal M}:n\in \N^*\}:(\Rightarrow)\\
    }{\;\;}{
        & \\
        & G_{0}
            :=\varnothing\\
        & G_{\infin}
            :=\bigcup_{n=1}^{\infin}E_n\\
        & G_{N}
            :=\bigcup_{n=1}^{N}E_n\\\\
        & \FieldEndl{
            \forall A\in {\frak P}(X):(\Rightarrow)
        }{\;\;}{
            & \CondEnd\\
            & \forall N\in \N^*:\mu(A \diagdown G_\infin) \le \mu(A \diagdown G_N)\\
            \\
            & \forall N\in \N^*:\mu(A)= 
                    \sum_{n=1}^N \mu(A\cap G_n\diagdown G_{n-1}) 
                    + \mu(A\diagdown G_N)\\
            \\
            & \begin{aligned}
                \mu(A) 
                & \le \mu(A\cap G_\infin) + \mu(A\diagdown G_\infin)\\
                & \le \sum_{n=1}^\infin \mu(A\cap G_n\diagdown G_{n-1}) 
                    + \mu(A\diagdown G_\infin)\\
                & \le \overline{\lim_{N\to\infin}} 
                    [\sum_{n=1}^N \mu(A\cap G_n\diagdown G_{n-1}) 
                    + \mu(A\diagdown G_N)]\\
                & = \mu (A)
            \end{aligned}\\
            \\
            & \mu(A\cap G_\infin) + \mu(A\diagdown G_\infin) = \mu(A)\\
            \\
        }\\
        & 
    }\\
    \\
    & {\cal M}\text<\sigma\text{-algebra>}\\
    & \mu|_{\cal M}\text{<measure>}
}
$$

RMK: Caratheodory条件给我们提供了一个构造可测集的充分条件, 即只要一个$\sigma$代数能够被$\text{Carath}_{X,\mu}$包含, 那么它一定能使得$\mu$成为测度. 

RMK: 下图是证明 ${\cal M}$ 为集代数的技巧的Venn图: 

- 最上面的圆圈是$A$, 沿逆时针方向三个圆圈依次表示 $A$, $E$, $F$
- 红线表示用 $E$ 将 $A$ 切成两半, 绿线表示用 $F$ 将 $A\cap E$ 切成两半. 
- 深灰色部分是 $A\cap E\cap F$, 浅灰色部分是 $A\cap (E\cap F)^\complement$ . 

![Caratheodory](Images/Caratheodory-1.png)

***

# 习题
