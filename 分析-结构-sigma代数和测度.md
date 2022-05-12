---
TimeLine: 
=> 20220328--20220329 : 抄了 Stein 第三册中抽象测度的第一节, sigma代数的等价条件还留了一部分没证. 
=> 20220331--20220331 : 添加了Borel代数的定义. 
---

| #未完成-正文 | #未完成-习题 | #UNFIXED | 
| ------------ | ------------ | ------- |

# 抽象测度

> 本节虽然有较多的定义, 但是并不繁重, 只要掌握最重要的Caratheodory条件即可. 
>
> 在之后的章节中将会讨论更多测度相关的对象, 例如积测度, 概率论中独立性的构造等等, 这些是比较困难的部分. 

## 半代数

\<文字定义\>

半代数是指对交封闭, 而对差集满足一定性质的代数结构. 

\<形式定义\>

$$
\semialg({\cal S}):=
\Field{(\and)}{\;\;}{
    & {\cal S}\text{<set>}\\
    \\
    & \bigcup\limits_{A\in \cal S} A, \varnothing \in {\cal S}\\
    \\
    & \Field{
        \forall A, B\in {\cal S}: (\and)
    }{\;\;}{
        & A \cap B \in {\cal S}\\
        & \exist {\cal X}\sube {\cal S}: \partition(B \diagdown A, {\cal X})
    }\\
}
$$

## 集代数

\<文字定义\>

集代数是指对并和对全集取补封闭的集族. 

\<形式定义\>

$$
\setalg({\cal S}):=
\Field{(\and)}{\;\;}{
    & {\cal S}\text{<set>}\\
    & \bigcup\limits_{A\in \cal S} A, \varnothing \in {\cal S}\\
    & \forall A, B\in {\cal S}: B \diagdown A, A \cup B \in {\cal S}
}
$$

\<RMK\>

关于交, 并运算, 实际上集合代数成环, 因此也有些文本当中叫做Boolean环. 

下面我们来进行验证. 

集合代数关于运算 $\cup$ 成一交换群. 

1. 以 $\varnothing$ 为零元
2. 满足交换律和结合律
3. $A$ 的逆取作 $\bigcup\limits_{A\in \cal S} A \diagdown A$

而交运算成一幺半群. 

1. 以 $\Omega$ 为幺元
2. 满足结合律

众所周知地, 集合的交, 并运算满足分配律, 至此验证了集合代数成环. 

## $\sigma$代数

\<文字定义\>

$\sigma$代数则是指对可列并和对全集取补运算封闭的集族. 

\<形式定义\>

$$
\sigmaalg({\cal S}):=
\Field{(\and)}{\;\;}{
    & {\cal S}\text{<set>}\\
    & \bigcup\limits_{A\in \cal S} A, \varnothing \in {\cal S}\\
    & \forall A, B\in {\cal S}: B \diagdown A \in {\cal S}\\
    & \forall {\cal A} \sube {\cal S}: 
        \Bigg(\card {\cal A} \prec \aleph(\varnothing)\Bigg)
        \Rarrow
        \Bigg(\bigcup_{A \in {\cal A}} \in {\cal S}\Bigg)
        \\
}
$$

## $\sigma$代数的等价条件

\<形式描述\>

$$
\FieldEndl{
    & \forall \setalg({\cal S}):(\LRarrow)
}{\;\;}{
    & \sigmaalg({\cal S})\\\\
    & \FieldEndl{
        & \forall E:\{n \prec \aleph(\varnothing)\}\to {\cal S}:
    }{\;\;}{
        & \CondBegin\\
        & E(n) \sube E(n\ddagger)\\
        & \CondEnd\\
        & \bigcup_{n \prec \aleph(\varnothing)} E \in {\cal S}
    }\\\\
    & \FieldEndl{
        & \forall E:\{n \prec \aleph(\varnothing)\}\to {\cal S}:
    }{\;\;}{
        & \CondBegin\\
        & E(n) \supe E(n\ddagger)\\
        & \CondEnd\\
        & \bigcap_{n \prec \aleph(\varnothing)} A \in {\cal S}
    }
}
$$

证明: 

$$
\FieldEndl{
    & \forall \setalg({\cal S}):(\LRarrow)
}{\;\;}{
    & \sigmaalg({\cal S})\\\\
    & \FieldEndl{
        & \forall E:\{n \prec \aleph(\varnothing)\}\to {\cal S}:
    }{\;\;}{
        & \CondBegin\\
        & E(n) \sube E(n\ddagger)\\
        & \CondEnd\\
        & \bigcup_{n \prec \aleph(\varnothing)} E \in {\cal S}
    }\\\\
    & \FieldEndl{
        & \forall E:\{n \prec \aleph(\varnothing)\}\to {\cal S}:
    }{\;\;}{
        & \CondBegin\\
        & E(n) \supe E(n\ddagger)\\
        & \CondEnd\\
        & \bigcap_{n \prec \aleph(\varnothing)} A \in {\cal S}
    }
}
$$

## $\sigma$扩张的定义

\<文字定义\>

一个集合的 $\sigma$ 扩张是指包含这个集合的最小 $\sigma$ 代数. 

\<形式定义\>

$$
\begin{matrix}
\sigma({\cal A})::
    \Field{(\and)}{\;\;}{
        \\
        & \FieldEndl{
            \forall {\cal S}:(\Rarrow)
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
{\frak B}(X,\tau):=\sigma(\tau):::\text{top-space}(X,\tau)
$$

## 外测度的定义

\<文字定义\>

外测度(exterior msr)是指具有下可加性的集函数. 

\<形式定义\>
 :
$$
\begin{matrix}
\exmsr(\mu):=
\Field{(\and)}{\;\;}{
    & \exist {\cal S}: \mu: {\cal S} \to [[0, \infin]]\\
    & {\cal S} := \mu: {\cal S} \to [[0, \infin]]\\
    & \sigmaalg({\cal S})\\
    & \forall {\cal A} \sube {\cal S}: 
        \card {\cal A} \prec \aleph(\varnothing) 
        \Rarrow
        
}
\end{matrix}
$$

## 测度的定义

$$
\begin{matrix}
\mu\text{<msr>}:=
\Field{(\and)}{\;\;}{
    & \\
    & \mu:S\to [0,\infin]\\
    & \mu(\varnothing)=0\\
    & \\
        & \FieldEndl{\forall E,F\in S:(\Rarrow)}{\;\;}{
        & \CondBegin\\
        & E\sube F\\
        & \CondEnd\\
        & \mu(E)\le \mu(F)
    }\\
    & \\
    & \FieldEndl{\forall E: \N \to S:(\Rarrow)}{\;\;}{
        & \CondBegin\\
        & E(n)\cap E(m)\ne \varnothing \Rarrow n = m\\
        & \CondEnd\\
        & \mu\left(\bigcup_{n \in \N} E(n)\right)=\sum_{n \in \N} \mu(E(n))
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
\text{msr-space}(X):=
\Field{(\and)}{\;\;}{
    & \sigaljbr(X[{\frak M}])\\
    & 
}
$$

## Caratheodory 条件 (分离条件)

Caratheodory 条件, 是指由一个集合产生的二分划使得给定外测度满足二元的可加性. 
$$
\begin{matrix}
\text{Carath}(X,\mu_*)
    :=\bigg\{
        E\in \Pow(X):
            \forall A\in \Pow(X):
            \mu_*(A\cap E)+\mu_*(A \diagdown E)
            =\mu_*(A)
    \bigg\}\\
\left.\begin{aligned}
    & :::X\text{<set>}\\
    & :::\mu_*:\Pow(X)\to [0,\infin]\\
    & :::\mu_*\text{<ex-msr>}
\end{aligned}\right.
\end{matrix}
$$
RMK: 注意是用给定的集合分划其他集合, 而不是反过来. 

满足 Caratheodory 条件的集族构成$\sigma$代数. 不仅如此, 如果把外测度限制到这一集族上, 我们将得到一个测度. 
$$
\FieldEndl{
    & \forall X\text{<set>}\\
    & \forall \mu:\Pow(X)\to [0,\infin]
}{\;\;}{
    & \CondBegin\\
    & \mu\text{<ex-msr>}\\
    & \CondEnd\\
    & {\cal M}:=\text{Carath}(X,\mu)\\
    & {\cal M}\text<\sigma\text{-algebra>}\\
    & \mu|_{\cal M}\text{<msr>}
}
$$

证明: 这里采取一种步骤式的证明方法, 我们先证明上述的 ${\cal M}$ 是一个集代数. 

$$
\FieldEndl{
    & \forall X\text{<set>}:\\
    & \forall \mu:\Pow(X)\to [0,\infin]:(\Rarrow)
}{\;\;}{
    & \CondBegin\\
    & \mu\text{<ex-msr>}\\
    & \CondEnd\\
    & {\cal M}:=\text{Carath}(X,\mu)\\
    \\
    & \forall A\in \Pow(X): \mu(A\cap \varnothing)+\mu(A\diagdown \varnothing)=\mu(A)\\
    & {\cal M}\supe \Big\{X,\varnothing\Big\}\\
    \\
    & \FieldEndl{
        & \forall E\in {\cal M}:
            \forall A\in \Pow(X):
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
        & \forall E,F\in {\cal M}:\forall A\in \Pow(X):(\Rarrow)
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
    & \forall \mu:\Pow(X)\to [0,\infin]
}{\;\;}{
    & \CondBegin\\
    & \mu\text{<ex-msr>}\\
    & \CondEnd\\
    & {\cal M}:=\text{Carath}(X,\mu)\\
    & {\cal M}\text{<set-algebra>}\\
    \\
    & \FieldEndl{
        & \forall E: \N^*\to {\cal M}:(\Rarrow)\\
    }{\;\;}{
        & \\
        & G(N) := \varnothing ::: N = 0\\
        & G(N) :=  \bigcup_{n=1}^N E(n) ::: N \ne \infin\\
        & G(N) := \bigcup_{n=1}^\infin E(n) ::: N = \infin\\
        & \FieldEndl{
            \forall A\in \Pow(X):(\Rarrow)
        }{\;\;}{
            & \CondEnd\\
            & \forall N\in \N^*:\mu(A \diagdown G(\infin)) \le \mu(A \diagdown G(N))\\
            \\
            & \forall N\in \N^*:\mu(A)= 
                    \sum_{n=1}^N \mu(A\cap G(n)\diagdown G(n-1))
                    + \mu(A\diagdown G(N))\\
            \\
            & \begin{aligned}
                \mu(A) 
                & \le \mu(A\cap G(\infin)) + \mu(A\diagdown G(\infin))\\
                & \le \sum_{n=1}^\infin \mu(A\cap G(n)\diagdown G(n-1)) 
                    + \mu(A\diagdown G(\infin))\\
                & \le \overline{\lim_{N\to\infin}} 
                    [\sum_{n=1}^N \mu(A\cap G(n)\diagdown G(n-1)) 
                    + \mu(A\diagdown G(N))]\\
                & = \mu (A)
            \end{aligned}\\
            \\
            & \mu(A\cap G(\infin)) + \mu(A\diagdown G(\infin)) = \mu(A)\\
            \\
        }\\
        & 
    }\\
    \\
    & {\cal M}\text<\sigma\text{-algebra>}\\
    & \mu|_{\cal M}\text{<msr>}
}
$$

RMK: Caratheodory条件给我们提供了一个构造可测集的充分条件, 即只要一个$\sigma$代数能够被$\text{Carath}(X,\mu)$包含, 那么它一定能使得$\mu$成为测度. 

RMK: 下图是证明 ${\cal M}$ 为集代数的技巧的Venn图: 

- 最上面的圆圈是$A$, 沿逆时针方向三个圆圈依次表示 $A$, $E$, $F$
- 红线表示用 $E$ 将 $A$ 切成两半, 绿线表示用 $F$ 将 $A\cap E$ 切成两半. 
- 深灰色部分是 $A\cap E\cap F$, 浅灰色部分是 $A\cap (E\cap F)^\complement$ . 

![Caratheodory](Images/Caratheodory-1.png)

***

# 习题
