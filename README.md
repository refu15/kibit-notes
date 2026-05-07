# Notes on Non-Discontinuous Discovery

A reading note from the AI field, May 2026.

公開記事から抽出した「非連続的発見」の論点を起点に、
創薬と現場 AI 実装の構造的類似性を整理した公開リサーチノート。
売り込みではなく、対話の準備として書いた書簡形式の Web ページ。

**Live**: https://refu15.github.io/kibit-notes/

## 構成

```
.
├─ index.html          # 書簡形式の単一ページ
├─ assets/
│  ├─ style.css        # 暖色クリーム × 黒のレターデザイン
│  └─ main.js          # 進捗バー / reveal
└─ README.md
```

## 章構成

1. なぜこの note を書いたか
2. 公開記事から抽出した 6 つの論点
3. 領域は違う、でも構造は同じ — 創薬と現場 AI の対比
4. こちらから持ち寄れること（4 つの手土産候補）
5. こちらが学びたいこと（4 つの質問）
6. 議論できたら嬉しい 5 つの問い
7. A standing invitation（売り込みではない誘い）
8. References（公開情報のみ）

## デザイン方針

- 黒（`#0a0a0a`）と暖色クリーム（`#f6f3ec`）の 2 色
- 既存の `Radio University Vol.01` よりも書簡感を強めるため、
  本文セリフ比率を上げ、最大幅を 760px の細長いコラムに
- Cormorant Garamond × Noto Serif JP × Inter × JetBrains Mono
- アニメーションは進捗バーと subtle fade-in のみ

## ローカル確認

```bash
python -m http.server 8000
# → http://localhost:8000
```

## ライセンス

公開情報のみを参照し、対話の準備として作成した個人リサーチノート。
References に明示している URL の各ページの著作権は各執筆者に帰属する。
