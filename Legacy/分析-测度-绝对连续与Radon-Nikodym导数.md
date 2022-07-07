---
TimeLine: 
=> 20220605--0000000 : 章节已创建
---
| #未完成-正文 | #未完成-习题 |
| ------------ | ------------ |

# 绝对连续与Radon-Nikodym导数

## 绝对连续性的定义 [DEF]

\<文字定义\>

一个测度 $\nu$ 被称为关于一个测度 $\mu$ 绝对连续, 是说对任意关于 $\mu$ 零测的集合 $A$ 在 $\nu$ 上也是零测. (换言之 $\nu$ 零测的部分更多一些)

\<形式定义\>

$$
\nu \ll \mu := \Block{(\and)}{\;\;}{
    & \mu, \nu \suffix\msr\\
    & \dom \mu = \dom \nu\\
    & \mu(A) = 0 \Rarrow \nu(A) = 0
}
$$

## Radon-Nikodym导数的定义 [DEF]

\<文字定义\>

 Radon-Nikodym导数是任意

\<形式定义\>



## Radon-Nikodym定理: 有限测度 [THM]

\<文字描述\>

对关于 $\mu$ 绝对连续的测度 $\nu$ , 如果 $\mu$ 和 $\nu$ 都是有限的测度, 则必存在 $\nu$ 关于 $\mu$ 的Radon-Nikodym导数. 

\<形式描述\>

$$
\BlockEndl{
    & \forall \nu \ll \mu\\
}{\;\;}{
    & \CondBegin\\
    & \Omega := \bigcup_{A \in \dom \mu} A\\
    & \mu(\Omega),\nu(\Omega) < \infin\\
    & \CondEnd\\
    & \exist f: \Omega\to [[0, \infin)): 
      \forall A \in \dom \mu:
      \nu(A)=\lebint_A f \dif \mu
}
$$

\<文字证明\>

试图构造所求的Radon-Nikodym导数, 构造的方法是取所有满足 $\forall A \in \dom \mu:\lebint_A f \dif \mu \le \nu(A)$ 的扩展实数上的可积函数, 记作集合 $F$ . 取 $F$ 在某种标准下的上界, 此处是取全域积分下的上界. 

观察到若两个函数 $f,g \in F$, 则其逐点取最大值得到的 $\frac 12(|f-g|+f+g)$ 也属于 $F$ . 

由可积函数的性质, 取 $F$ 中的函数列 $f_{(n)}$ 使得 $\lebint f_{(n)} \dif \mu > U - 1/n$ , 由上述观察, 不妨令 $f_{(n+1)} \ge f_{(n)}$ . 这个函数列的逐点极限记为 $f_{\infin}$ , 通过Fatou引理的推论知 $U = \lebint f_{\infin} \dif \mu$

自然地, $f_{\infin} \in F$ , 只要证明任意可测集 $A$ 有 $\lebint_A f \dif \mu \ge \nu(A)$ 即可, 用反证法来证明不存在 $A$ 使得这个命题不成立. 

只要存在 $A$ 使得 $\nu(A) -  \lebint_{A} f_{\infin} \dif \mu > 0$, 就一定存在 $\varepsilon$ 使得对这个 $A$ 有 $\nu(A) - \lebint_A f_\infin \dif \mu > \varepsilon \cdot \mu(A)$ . 

视 $\lambda(A) = \nu(A) - \lebint_A f_\infin \dif \mu - \varepsilon \cdot \mu(A)$ 为符号测度, 如果找到一个对 $\lambda$ 而言的非零正集 $P$ , 就能知道 $f_{\infin} + \varepsilon \cdot \Ind_{\in P} \in F$ , 而这和 $U$ 是全域积分上界矛盾. 

取其全集的Hahn分解中的正集 $P$ 一定有 $\lambda(P) \ge \lambda(P \cap A) \ge \lambda(A)> 0$ , 易验证 $f_\infin + \varepsilon \cdot \Ind_{\in P} \in F$ . 

如果此时:  $\mu(P) > 0$ , 则与 $U$ 是上界矛盾; $\mu(P) = 0$ , 则由 $\nu \ll \mu$ 知道 $\nu(P) = 0$ , 从而 $\lambda(P) = 0$ 和 $\lambda(P) > 0$ 矛盾; 

故不存在使得 $\nu(A) -  \lebint_{A} f_{\infin} \dif \mu > 0$ 的 $A$ . 

因为 $F$ 中函数都可积, 故 $\{f_{\infin} = \infin\}$ 是零测的, 取 $f_{\infin} \cdot \Ind_{\in \{f_{\infin}<\infin\}}$ 即得所求的Radon-Nikodym导数. 

\<形式证明\>

$$
\BlockEndl{
    & \forall \nu \ll \mu
}{\;\;}{
    & \CondBegin\\
    & \Omega := \bigcup_{A \in \dom \mu} A\\
    & \mu(\Omega),\nu(\Omega) < \infin\\
    & \CondEnd\\
    & F := \left\{
        f:\Omega\to [[0, \infin]]: 
        \Block{(\and)}{\;\;}{
            & \forall O \in \R[\tau]: f^\leftarrow (O) \in \dom \mu\\
            & \forall A \in \dom \mu:\lebint_A f \dif \mu \le \nu(A)\\
            & \lebint |f| \dif \mu < \infin\\
        }
    \right\}\\\\
    & \BlockEndl{
        & \forall f_1, f_2 \in F
    }{\;\;}{
        & \CondEnd\\
        & f_* :: \Block{(\and)}{\;\;}{
            & f_*: \Omega \to [[0, \infin]]\\
            & f_*(x) = \sup_{@ \R}\{f_1(x), f_2(x)\}\\
        }\\
        & \BlockEndl{
            & \forall A \in \dom\mu:
         }{\;\;}{
            & \lebint_A f_* \dif \mu\\
            & = \lebint_{A \cap \{f_1 \ge f_2\}} f_1 \dif\mu + \lebint_{A \cap \{f_1 < f_2\}} f_2 \dif\mu\\
            & \le \nu(A \cap \{f_1 \ge f_2\}) +\nu (A\cap \{f_1 < f_2\})\\
            & =\nu(A)
         }
    }\\\\
    & U := \sup_{@ \R} \left\{\lebint_\Omega f \dif \mu : f \in F\right\}\\
    & \forall \varepsilon \in ((0, \infin)): \exist f \in F:U-\varepsilon  < \lebint_\Omega f \dif \mu \le U\\\\
    & \BlockEndl{
        & \forall  f:[1 .. ] \to F \\
        & \exist g:[1 .. ] \to F
    }{\;\;}{
        & \CondEnd\\
        & f_{(1)}=g_{(1)} \\
        & g_{(n+1)}=\frac{|g_{(n)}-f_{(n+1)}|+g_{(n)}+f_{(n+1)}}{2}\\
        & g_{(n+1)} \ge g_{(n)} \ge f_{(n)}\\
    }\\\\
    & \BlockEndl{
        & \# f:[1 ..] \to F
    }{\;\;}{
        & \CondBegin\\
        & f_{(n+1)} \ge f_{(n)}\\
        & U-1/n  < \lebint_\Omega f_{(n)} \dif \mu \le U\\
        & \CondEnd\\
        & f_\infin :: \Block{(\and)}{\;\;}{
            & f_\infin: \Omega \to [[0, \infin]]\\
            & f_\infin(x) = \lim_{@ \R;(n \to \infin)_{@ \N}} f_{(n)}(x)\\
        }\\
        & \lebint_{\Omega} f_\infin \dif \mu 
        = \lim_{@ \R;(n \to \infin)_{@ \N}}\lebint_{\Omega} f_{(n)} \dif \mu
        = U\\\\
        & \BlockEndl{
            & \forall A \in \dom \mu\\
        }{\;\;}{
            & \CondBegin\\
            & \nu(A) - \lebint_A f_\infin \dif \mu > 0\\
            & \CondEnd\\
            & \BlockEndl{
                & \# \varepsilon \in ((0, \infin)):
            }{\;\;}{
                & \CondBegin\\
                & \lambda :: \Block{(\and)}{\;\;}{
                    & \lambda : \dom \mu \to ((-\infin,\infin]]\\
                    & \lambda(X) = \nu(X) - \lebint_X f_\infin \dif \mu - \varepsilon \cdot \mu(X)\\
                }\\
                & \lambda(A) > 0\\
                & \CondEnd\\
                & \BlockEndl{
                    & \# \text{hahn-decompose}(\lambda)(P, N)
                }{\;\;}{
                    & \CondEnd\\
                    & \lambda(P) \ge \lambda(P \cap A) > 0\\
                    & \forall A \in \dom \mu: 
                        \lebint_{A} (f_\infin + \varepsilon \cdot \Ind_{\in P}) \dif \mu < \nu(A)\\
                    & f_{\infin} + \varepsilon \cdot \Ind_{\in P} \in F\\\\
                    & \mu(P) > 0 \Rarrow \lebint_{\Omega} (f_{\infin} + \varepsilon \cdot \Ind_{\in P}) \dif\mu > U\\
                    & \mu(P) = 0 \Rarrow \nu(P) = 0 \and \lambda(P) = 0\\
                    \\
                    &  False
                }
            }
        }\\\\
        & \forall A \in \dom \mu: \nu(A) = \lebint_A f_\infin \dif \mu\\
        & f_{\infin} \cdot \Ind_{\in\{f_{\infin} < \infin\}}: \Omega\to [[0, \infin))\\ 
        & \forall A \in \dom \mu:
            \nu(A)=\lebint_A f_\infin \dif \mu=\lebint_A f_{\infin} \cdot \Ind_{\in\{f_{\infin} < \infin\}} \dif \mu
    }
}
$$

## Radon-Nikodym定理: $\sigma$有限测度 [THM]

\<文字描述\>

对关于 $\mu$ 绝对连续的测度 $\nu$ , 如果 $\mu$ 和 $\nu$ 都是 $\sigma$ 有限的测度, 则必存在 $\nu$ 关于 $\mu$ 的Radon-Nikodym导数. 

\<形式描述\>

$$
\BlockEndl{
    & \forall \nu \ll \mu:
}{\;\;}{
    & \CondBegin\\
    & \Omega := \bigcup_{A \in \dom \mu} A\\
    & \mu,\nu\suffix\sigmafinite\\
    & \CondEnd\\
    & \exist f: \Omega\to [[0, \infin)): 
      \forall A \in \dom \mu:
      \nu(A)=\lebint_A f \dif \mu
}
$$

\<文字证明\>

因为 $\mu$ 和 $\nu$ 都是 $\sigma$ 有限的, 所以分别取两个测度的可数分划 $A_{(n)}$ 和 $B_{(n)}$, 使得 $\mu(A_{(n)})$ 和 $\nu(B_{(n)})$ 全都是有限的. 

从而在各个 $A_{(n)} \cap B_{(m)}$ 上, 由测度的单调性知 $\mu(A_{(n)} \cap B_{(m)})$ 和 $\nu(A_{(n)} \cap B_{(m)})$ 都是有限的, 由此规约到有限情形, 分别取满足要求的 $f_{(m,n)}$

不妨将各个 $f_{(m,n)}$ 视为在 $A_{(n)} \cap B_{(m)}$ 外都为 $0$ , 则对于全域, $f_*=\sum_{m,n \in [1 ..]} f_{(m,n)}$ 就是所求的Radon-Nikodym导数. 

\<形式证明\>

$$
\BlockEndl{
    & \forall \nu \ll \mu:
}{\;\;}{
    & \CondBegin\\
    & \Omega := \bigcup_{A \in \dom \mu} A\\
    & \mu,\nu\suffix\sigmafinite \\
    & \CondEnd\\
    & \BlockEndl{
        & \# M: [1 ..]\to \dom \mu\\
        & \# N: [1 ..]\to \dom \nu\\
    }{\;\;}{
        & \CondBegin\\
        & \bigcup_{A \in \img M} A = \bigcup_{A \in \img N} A= \Omega\\
        & \forall A,B\in \img M:A \cap B=\varnothing \or A = B\\ 
        & \forall A,B\in \img N:A \cap B=\varnothing \or A = B\\ 
        & \forall A\in \img M: \mu(A) < \infin\\
        & \forall B\in \img N: \nu(B) < \infin\\
        \\
        & \CondEnd\\
        & F := \{f:\Omega \to [[0, \infin)): \exist m,n\in [1 ..]:f=f\cdot \Ind_{\in M_{(m)} \cap N_{(n)}}\}\\
        \\
        & \BlockEndl{
            & \# f:[1 ..]\times [1 ..]\to F
        }{\;\;}{
            & \CondBegin\\
            & f_{(m,n)} = f_{(m,n)} \cdot \Ind_{\in M_{(m)} \cap N_{(n)}}\\
            & \forall A \in \Pow(M_{(m)} \cap N_{(n)}) \cap \dom \mu:\lebint_A f_{(m,n)} \dif \mu= \nu(A)\\
            & \CondEnd\\
            & f_{*} := \sum_{m,n \in [1 ..]} f_{(m,n)}\\
            & f_*: \Omega\to [[0, \infin))\\
            & \forall A \in \dom \mu:
              \nu(A)=\lebint_A f_* \dif \mu
        }
    }
}
$$

