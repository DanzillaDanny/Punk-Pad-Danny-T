import React, { useEffect, useMemo, useRef, useState } from "react";
import "index.css";


const Knobs = ({
    value,
    min,
    max,
    step = 1,
    onChange,
    onChangeEnd,
    size = 64,
    label,
    format,
    angleMin = -135,
    angleMax = 135,
    discreteStops,
    diabled = false,
}) => {
    const clamp = (v) => Math.min(max, Math.max(min,v));
    const roundToStep = (v) => Math.round(v / step) * step;

    const pct = (clamp(value) - min) / (max -min || 1);
    const angleRange = angleMax - angleMin;

    const angleRaw = angleMin + pct * angleRange;
    const angle = useMemo(() => {
        if (!discreteStops) return angleRaw;
    }

}