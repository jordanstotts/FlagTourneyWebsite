import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { List } from "reactstrap";
import SiteNavBar from "./SiteNavBar";

const Rules = () => {
  return (
    <div>
      <SiteNavBar />
      <h1 className="rules-header">Rules</h1>
      <div className="rules-layout">
        <div className="rule-section">
          <h3 className="rule-name">Before Play Starts</h3>
          <List className="rules-list" type="unstyled">
            <ul>
              <li>
                Before play starts everyone must mark their balls and tell the
                group what ball they are playing so others can help find it on a
                bad shot
              </li>
              <li>
                A tee will be tossed in the air to decide what the order of the
                teeing off on the 1st hole will be
              </li>
            </ul>
          </List>
        </div>
        <div className="rule-section">
          <h3 className="rule-name">Putting</h3>
          <List className="rules-list" type="unstyled">
            <ul>
              <li>
                On the putting green, players should not stand on another
                player's line of putt or, when he is making a stroke, cast a
                shadow over his line of putt. Players should remain on or close
                to the putting green until all other players in the group have
                holed out.
              </li>
              <li>
                The flag shall remain until all golfers have reached the green
                unless otherwise asked to be removed
              </li>
            </ul>
          </List>
        </div>
        <div className="rule-section">
          <h3 className="rule-name">Lost Ball</h3>
          <List className="rules-list" type="unstyled">
            <ul>
              <li>
                If your ball is lost outside a water hazard or out of bounds you
                must play another ball from the spot where the last shot was
                played, under penalty of one stroke
              </li>
              <li>
                You are allowed 5 minutes to search for a ball. If it is not
                found within 5 minutes, it is lost
              </li>
              <li>
                If the original ball is lost (other than in a water hazard) or
                out of bounds, you must continue with the provisional ball,
                under penalty of one stroke. If the original ball is found in
                bounds, you must continue play of the hole with it, and must
                stop playing the provisional ball
              </li>
              <li>
                If your ball is in a water hazard and you do not wish to play it
                as it lies, you must proceed under the water hazard rule - the
                unplayable ball rule does not apply. Elsewhere on the course, if
                you believe your ball is unplayable, you may, under penalty of
                one stroke:
                <ul>
                  <li>play a ball from where your last shot was played, or</li>
                  <li>
                    drop a ball any distance behind the point where the ball lay
                    keeping a straight line between the hole, the point where
                    the ball lay and the spot on which the ball is dropped, or
                  </li>
                  <li>
                    drop a ball within two club-lengths of where the ball lies
                    not nearer the hole
                  </li>
                </ul>
              </li>
              <li>When a ball is dropped, must drop it from shoulder height</li>
            </ul>
          </List>
        </div>
        <div className="rule-section">
          <h3 className="rule-name">Approaching a Ball</h3>
          <List className="rules-list" type="unstyled">
            <ul>
              <li>
                No talking or distractions are allowed when a golfer approaches
                a shot
              </li>
              <li>
                We will play ready golf but only one golfer is allowed to
                approach and hit a shot at one point in time
              </li>
            </ul>
          </List>
        </div>
        <div className="rule-section">
          <h3 className="rule-name">Tee Shots</h3>
          <List className="rules-list" type="unstyled">
            <ul>
              <li>
                The tee shot must be between and in line with/behind the markers
              </li>
            </ul>
          </List>
        </div>
        <div className="rule-section">
          <h3 className="rule-name">Other Notes</h3>
          <List className="rules-list" type="unstyled">
            <ul>
              <li>
                If the ball is still in play but in an unplayable area (under a
                tree or on the cart path) it can moved into playable area two
                club lengths for a stroke
              </li>
              <li>
                There will be no 'gimme' shots…all golfers will need to finish
                by holing out
              </li>
              <li>There will be no mulligans</li>
              <li>
                You may move a loose object in the way of a shot (such as: leave
                or twig)
              </li>
              <li>
                Golfers must repair divots and damage to the putting green
              </li>
              <li>No practice shots from the bunkers</li>
              <li>
                The max score you can receive on any given hole is 10 strokes
              </li>
            </ul>
          </List>
        </div>
        <div className="rule-section">
          <h3 className="rule-name">Flag</h3>
          <List className="rules-list" type="unstyled">
            <ul>
              <li>
                The previous year winner of the flag will need to bring the flag
                to next years tournament
              </li>
              <li>
                The flag winner will need to display the flag in a public place
                for the duration of the year they have it. (home, office, etc.)
              </li>
              <li>
                The flag winner must get their name, score and year stitched in
                the flag the day they receive the flag
              </li>
              <li>
                The winner of the flag must post on Instagram, Facebook or some
                form of social media for the world to see
              </li>
              <li>
                Picture must be taken of the person who won the flag last year
                handing it off to the person who won it for current year with
                them shaking hands.
                <ul>
                  <li>
                    If someone wins two years in a row they will stand their and
                    look dumb
                  </li>
                </ul>
              </li>
              <li>One scorecard must be kept to reflect back on the years</li>
            </ul>
          </List>
        </div>
      </div>
    </div>
  );
};

export default Rules;
