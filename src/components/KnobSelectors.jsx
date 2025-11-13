import React, { useEffect, useMemo, useRef, useState } from "react";
import "index.css";


const Knobs = ({
    value,
    min,
    max,
    step = 1,
    onChange,
    onChangeEnd,
    size = 72,
    label,
    stops,
    format,
    angleMin = -135,
    angleMax = 135,
    diabled = false,
}) => {
    const clamp = (v) => Math.min(max, Math.max(min,v));
    const roundToStep = (v) => Math.round(v / step) * step;

// percent across range
    const pct = (clamp(value) - min) / Math.max(1, (max-min));
    const angleRange = angleMax - angleMin;
    const rawAngle = angleMin + pct * angleRange;

//snape the indicator to the discrete stops if provided.
    const indicatorAngle = useMemo(() => {
        if (!stops || stops < 2) return rawAngle;
        const inc = angleRange / (stops -1);
        return Math.round((rawAngle - angleMin) / inc) * inc + angleMin;
}, [rawAngle, angleMin, angleRange, stops]);

//dragging
const [dragging, setDragging] = useState(false);
const startRef = useRef({ y: 0, v: value });

//Adjust for sensitivity (px to sweep entire range)
const sweepPx = 150;

const setFromDelta = (dy) => {
    // Drag up to increase the value.
    const delta = -(dy / sweepPx) * (max-min);
    let next = startRef.current.v + delta;
    next = roundToStep(clamp(next));

    // If discrete detents, snap to nearest stop value across [min..max]
    if (stops && stops > 1) {
        const stepSize = (max-min) / (stops -1);
        const snappedIdx = Math.round((next - min) / stepSize);
        next = min + snappedIdx * stepSize;
    }

    onChange(next);
};

// Mouse
const onMouseDown = (e) => {
    if (disabled) return;
    e. preventDefault();
    setDragging(true);
    startRef.current= {y: e.clientY, v: value };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    onChangeEnd && onChangeEnd();
};
}
