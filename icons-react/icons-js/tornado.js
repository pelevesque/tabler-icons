import * as React from "react";

const IconTornado = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-tornado" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 4h-18" /><path d="M13 16h-6" /><line x1={11} y1={20} x2={15} y2={20} /><line x1={6} y1={8} x2={20} y2={8} /><line x1={4} y1={12} x2={16} y2={12} /></svg>;

export default IconTornado;