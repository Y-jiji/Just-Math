import torch as t
import matplotlib.pyplot as plt


def criterion(param):
    EPS = 1e-8

    sz = param.size()[-1] - 1
    m = t.rand(8, sz)
    sample = param[:sz] * m + param[1:] * (1-m)

    h = (
        lambda x: x*(x+EPS).log()+(1-x)*(1-x+EPS).log()
    )(
        (m + t.ones(8, sz).cumsum_(-1) - 1) / sz
    )

    mc = ((sample + EPS).log() * sample).sum() + (h * sample).sum()
    mc = -mc / m.size()[-1]

    unif = param[:sz].sum() + param[1:].sum()
    unif = -(unif / 2 - sz).abs() / sz
    unif += -(-param).relu().sum()

    return mc + unif


if __name__ == '__main__':
    plt.ion()
    ax = plt.axes()

    param = t.rand(128)
    param.requires_grad_(True)
    param.momentum = t.zeros(param.size())
    η = 1e-4
    w = 1e-2

    itercnt = 0

    for i in range(20000):
        itercnt += 1
        itercnt %= 10
        loss = criterion(param)
        print(loss.item())
        loss.backward()
        with t.no_grad():
            param.momentum += t.nan_to_num(
                param.grad - param.momentum, 0
            ) * w
            param += param.momentum * η
        if itercnt % 10 == 0:
            ax.clear()
            ax.set_xlim(0, 1)
            ax.plot([i/127 for i in range(128)],
                    param.detach().numpy(), label='param')
            ax.plot([i/127 for i in range(128)],
                    param.momentum.detach().numpy(), label='grad')
            ax.legend()
            plt.pause(0.01)
