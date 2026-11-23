# tiny-stack-vm

[![make.fun · tiny-stack-vm-01-run-20261122](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/muhammadaldy198/tiny-stack-vm/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/muhammadaldy198/tiny-stack-vm/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)

A real stack virtual machine for make.fun's tiny stack ISA, hand-written and hand-golfed in one dependency-free `main.ts` (1,590 bytes): the full 37-opcode ISA, all ten traps with their exact exit codes and order, the 1,000,000-step limit, the 64 KB output limit, 256-word memory, and byte-identical output on the practice set, fresh draws, and a hand-built trap/edge matrix. Grade-local score: 1,000,000 (perfect), 40/40 instances, regrade byte-for-byte.

## How it works

- **Metadata-string dispatch.** One 84-character string encodes every opcode's immediate length, stack pops and pushes; the step loop reads it instead of a switch over 37 cases, and the same lookup rejects bad opcodes.
- **Exact trap order.** Steps limit, program counter, bad opcode, truncated immediate, stack underflow, stack overflow — then the instruction's own traps (divide by zero, memory, call depth, empty return, output limit) — exactly as the reference VM orders them. All exits (halt, exit code, traps) are thrown exceptions caught once per instance.
- **Correct arithmetic, not fast arithmetic.** Multiplication uses `Math.imul` (a float multiply loses low bits past 2^53); unsigned division/modulo and comparisons use unsigned operands; shifts rely on JavaScript's own 5-bit masking; `Int32Array` assignment does the int32 wrap, so no `|0` is needed on stores.
- **Output as a string.** PRINT and PUTC append to one string (all bytes are 0–255), written once per instance as latin1 — no output buffer bookkeeping, and the 64 KB limit is a length check.
- **Golfed by hand, verified by machine.** From 4,215 bytes to 1,590 by hand (no minifier tool): ternary-chain dispatch, `Buffer.readInt32LE`/`readInt8` for immediates, plain arrays for the call stack and memory (only the data stack needs `Int32Array` wrapping), unsigned comparisons for range checks.
- **Verified, not assumed.** Differential-tested against the kit's own reference VM: practice 40/40, 2 fresh draws 80/80, 48 trap cases, 33 edge cases (all 8 edge types, including the exact 1,000,000-step boundary), and 400 random programs — 1,202/1,202 checks byte-identical.
