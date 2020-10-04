import React from 'react';

export function Spells(props) {
    const spellClassModifier = "--"+props.spell.type;
    return (
            <div className={"spell spell"+spellClassModifier.toLowerCase()}>
                <div className="spell spell__title">
                    {props.spell.spell}
                </div>
                <div className="spell spell__type">
                    {props.spell.type}
                </div>
                <div className="spell spell__effect">
                    {props.spell.effect}
                </div>
            </div>
        );
}