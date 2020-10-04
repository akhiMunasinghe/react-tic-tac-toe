import React from 'react';

export function Spells(props) {
    const spellClassName = props.spell.type? `spell spell--${props.spell.type.toLowerCase()}`:"";
    return (
        <div className={spellClassName}>
                <div className="spell__title">
                    {props.spell.spell}
                </div>
                <div className="spell__type">
                    {props.spell.type}
                </div>
                <div className="spell__effect">
                    {props.spell.effect}
                </div>
            </div>
        );
}