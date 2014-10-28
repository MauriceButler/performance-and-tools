perf record -F 99 -p `pgrep -n node` -g -- sleep 30 ;

perf script > out.nodestacks01 ;

~/dev/FlameGraph/stackcollapse-perf.pl < ./out.nodestacks01 | ~/dev/FlameGraph/flamegraph.pl > ./out.nodestacks01.svg ;
