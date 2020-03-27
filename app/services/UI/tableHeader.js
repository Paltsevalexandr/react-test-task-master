import React from 'react';
export function TableHeader() {
    return(
        <thead>
            <tr>
                <th>ticker</th>
                <th>exchange</th>
                <th>price</th>
                <th>change</th>
                <th>change_percent</th>
                <th>last_trade_time</th>
                <th>dividend</th>
                <th>yield</th>
            </tr>
        </thead>
    );
}
