/**
 * `Witherable` represents data structures which can be _partitioned_ with effects in some `Applicative` functor.
 *
 * @since 2.0.0
 */
import { Applicative, Applicative1, Applicative2, Applicative2C, Applicative3, Applicative3C } from './Applicative'
import { Separated } from './Compactable'
import { Either } from './Either'
import { HKT, Kind, Kind2, Kind3, URIS, URIS2, URIS3 } from './HKT'
import { Option } from './Option'

/**
 * @category type classes
 * @since 2.0.0
 */
export interface Witherable<T> {
  readonly URI: T
  readonly wilt: Wilt<T>
  readonly wither: Wither<T>
}

/**
 * @category type classes
 * @since 2.0.0
 */
export interface Witherable1<T extends URIS> {
  readonly URI: T
  readonly wilt: Wilt1<T>
  readonly wither: Wither1<T>
}

/**
 * @category type classes
 * @since 2.0.0
 */
export interface Witherable2<T extends URIS2> {
  readonly URI: T
  readonly wilt: Wilt2<T>
  readonly wither: Wither2<T>
}

/**
 * @category type classes
 * @since 2.0.0
 */
export interface Witherable2C<T extends URIS2, E> {
  readonly URI: T
  readonly wilt: Wilt2C<T, E>
  readonly wither: Wither2C<T, E>
}

/**
 * @category type classes
 * @since 2.0.0
 */
export interface Witherable3<T extends URIS3> {
  readonly URI: T
  readonly wilt: Wilt3<T>
  readonly wither: Wither3<T>
}

/**
 * @since 2.0.0
 */
export interface Wither<W> {
  <F extends URIS3>(F: Applicative3<F>): <A, R, E, B>(
    ta: HKT<W, A>,
    f: (a: A) => Kind3<F, R, E, Option<B>>
  ) => Kind3<F, R, E, HKT<W, B>>
  <F extends URIS3, E>(F: Applicative3C<F, E>): <A, R, B>(
    ta: HKT<W, A>,
    f: (a: A) => Kind3<F, R, E, Option<B>>
  ) => Kind3<F, R, E, HKT<W, B>>
  <F extends URIS2>(F: Applicative2<F>): <A, E, B>(
    ta: HKT<W, A>,
    f: (a: A) => Kind2<F, E, Option<B>>
  ) => Kind2<F, E, HKT<W, B>>
  <F extends URIS2, E>(F: Applicative2C<F, E>): <A, B>(
    ta: HKT<W, A>,
    f: (a: A) => Kind2<F, E, Option<B>>
  ) => Kind2<F, E, HKT<W, B>>
  <F extends URIS>(F: Applicative1<F>): <A, B>(ta: HKT<W, A>, f: (a: A) => Kind<F, Option<B>>) => Kind<F, HKT<W, B>>
  <F>(F: Applicative<F>): <A, B>(ta: HKT<W, A>, f: (a: A) => HKT<F, Option<B>>) => HKT<F, HKT<W, B>>
}

/**
 * @since 2.0.0
 */
export interface Wither1<W extends URIS> {
  <F extends URIS3>(F: Applicative3<F>): <A, R, E, B>(
    ta: Kind<W, A>,
    f: (a: A) => Kind3<F, R, E, Option<B>>
  ) => Kind3<F, R, E, Kind<W, B>>
  <F extends URIS3, E>(F: Applicative3C<F, E>): <A, R, B>(
    ta: Kind<W, A>,
    f: (a: A) => Kind3<F, R, E, Option<B>>
  ) => Kind3<F, R, E, Kind<W, B>>
  <F extends URIS2>(F: Applicative2<F>): <A, E, B>(
    ta: Kind<W, A>,
    f: (a: A) => Kind2<F, E, Option<B>>
  ) => Kind2<F, E, Kind<W, B>>
  <F extends URIS2, E>(F: Applicative2C<F, E>): <A, B>(
    ta: Kind<W, A>,
    f: (a: A) => Kind2<F, E, Option<B>>
  ) => Kind2<F, E, Kind<W, B>>
  <F extends URIS>(F: Applicative1<F>): <A, B>(ta: Kind<W, A>, f: (a: A) => Kind<F, Option<B>>) => Kind<F, Kind<W, B>>
  <F>(F: Applicative<F>): <A, B>(ta: Kind<W, A>, f: (a: A) => HKT<F, Option<B>>) => HKT<F, Kind<W, B>>
}

/**
 * @since 2.0.0
 */
export interface Wither2<W extends URIS2> {
  <F extends URIS3>(F: Applicative3<F>): <WE, A, R, FE, B>(
    ta: Kind2<W, WE, A>,
    f: (a: A) => Kind3<F, R, FE, Option<B>>
  ) => Kind3<F, R, FE, Kind2<W, WE, B>>
  <F extends URIS2>(F: Applicative2<F>): <WE, A, FE, B>(
    ta: Kind2<W, WE, A>,
    f: (a: A) => Kind2<F, FE, Option<B>>
  ) => Kind2<F, FE, Kind2<W, WE, B>>
  <F extends URIS2, FE>(F: Applicative2C<F, FE>): <WE, A, B>(
    ta: Kind2<W, WE, A>,
    f: (a: A) => Kind2<F, FE, Option<B>>
  ) => Kind2<F, FE, Kind2<W, WE, B>>
  <F extends URIS>(F: Applicative1<F>): <E, A, B>(
    ta: Kind2<W, E, A>,
    f: (a: A) => Kind<F, Option<B>>
  ) => Kind<F, Kind2<W, E, B>>
  <F>(F: Applicative<F>): <E, A, B>(ta: Kind2<W, E, A>, f: (a: A) => HKT<F, Option<B>>) => HKT<F, Kind2<W, E, B>>
}

/**
 * @since 2.0.0
 */
export interface Wither2C<W extends URIS2, E> {
  <F extends URIS3>(F: Applicative3<F>): <A, R, FE, B>(
    ta: Kind2<W, E, A>,
    f: (a: A) => Kind3<F, R, FE, Option<B>>
  ) => Kind3<F, R, FE, Kind2<W, E, B>>
  <F extends URIS2>(F: Applicative2<F>): <A, FE, B>(
    ta: Kind2<W, E, A>,
    f: (a: A) => Kind2<F, FE, Option<B>>
  ) => Kind2<F, FE, Kind2<W, E, B>>
  <F extends URIS2, FE>(F: Applicative2C<F, FE>): <A, B>(
    ta: Kind2<W, E, A>,
    f: (a: A) => Kind2<F, FE, Option<B>>
  ) => Kind2<F, FE, Kind2<W, E, B>>
  <F extends URIS>(F: Applicative1<F>): <A, B>(
    ta: Kind2<W, E, A>,
    f: (a: A) => Kind<F, Option<B>>
  ) => Kind<F, Kind2<W, E, B>>
  <F>(F: Applicative<F>): <A, B>(ta: Kind2<W, E, A>, f: (a: A) => HKT<F, Option<B>>) => HKT<F, Kind2<W, E, B>>
}

/**
 * @since 2.0.0
 */
export interface Wither3<W extends URIS3> {
  <F extends URIS3>(F: Applicative3<F>): <WR, WE, A, FR, FE, B>(
    ta: Kind3<W, WR, WE, A>,
    f: (a: A) => Kind3<F, FR, FE, Option<B>>
  ) => Kind3<F, FR, FE, Kind3<W, WR, WE, B>>
  <F extends URIS2>(F: Applicative2<F>): <WR, WE, A, FE, B>(
    ta: Kind3<W, WR, WE, A>,
    f: (a: A) => Kind2<F, FE, Option<B>>
  ) => Kind2<F, FE, Kind3<W, WR, WE, B>>
  <F extends URIS2, FE>(F: Applicative2C<F, FE>): <R, WE, A, B>(
    ta: Kind3<W, R, WE, A>,
    f: (a: A) => Kind2<F, FE, Option<B>>
  ) => Kind2<F, FE, Kind3<W, R, WE, B>>
  <F extends URIS>(F: Applicative1<F>): <R, E, A, B>(
    ta: Kind3<W, R, E, A>,
    f: (a: A) => Kind<F, Option<B>>
  ) => Kind<F, Kind3<W, R, E, B>>
  <F>(F: Applicative<F>): <R, E, A, B>(
    ta: Kind3<W, R, E, A>,
    f: (a: A) => HKT<F, Option<B>>
  ) => HKT<F, Kind3<W, R, E, B>>
}

/**
 * @since 2.0.0
 */
export interface Wilt<W> {
  <F extends URIS3>(F: Applicative3<F>): <A, R, E, B, C>(
    wa: HKT<W, A>,
    f: (a: A) => Kind3<F, R, E, Either<B, C>>
  ) => Kind3<F, R, E, Separated<HKT<W, B>, HKT<W, C>>>
  <F extends URIS3, E>(F: Applicative3C<F, E>): <A, R, B, C>(
    wa: HKT<W, A>,
    f: (a: A) => Kind3<F, R, E, Either<B, C>>
  ) => Kind3<F, R, E, Separated<HKT<W, B>, HKT<W, C>>>
  <F extends URIS2>(F: Applicative2<F>): <A, E, B, C>(
    wa: HKT<W, A>,
    f: (a: A) => Kind2<F, E, Either<B, C>>
  ) => Kind2<F, E, Separated<HKT<W, B>, HKT<W, C>>>
  <F extends URIS2, E>(F: Applicative2C<F, E>): <A, B, C>(
    wa: HKT<W, A>,
    f: (a: A) => Kind2<F, E, Either<B, C>>
  ) => Kind2<F, E, Separated<HKT<W, B>, HKT<W, C>>>
  <F extends URIS>(F: Applicative1<F>): <A, B, C>(
    wa: HKT<W, A>,
    f: (a: A) => Kind<F, Either<B, C>>
  ) => Kind<F, Separated<HKT<W, B>, HKT<W, C>>>
  <F>(F: Applicative<F>): <A, B, C>(
    wa: HKT<W, A>,
    f: (a: A) => HKT<F, Either<B, C>>
  ) => HKT<F, Separated<HKT<W, B>, HKT<W, C>>>
}

/**
 * @since 2.0.0
 */
export interface Wilt1<W extends URIS> {
  <F extends URIS3>(F: Applicative3<F>): <A, R, E, B, C>(
    wa: Kind<W, A>,
    f: (a: A) => Kind3<F, R, E, Either<B, C>>
  ) => Kind3<F, R, E, Separated<Kind<W, B>, Kind<W, C>>>
  <F extends URIS3, E>(F: Applicative3C<F, E>): <A, R, B, C>(
    wa: Kind<W, A>,
    f: (a: A) => Kind3<F, R, E, Either<B, C>>
  ) => Kind3<F, R, E, Separated<Kind<W, B>, Kind<W, C>>>
  <F extends URIS2>(F: Applicative2<F>): <A, E, B, C>(
    wa: Kind<W, A>,
    f: (a: A) => Kind2<F, E, Either<B, C>>
  ) => Kind2<F, E, Separated<Kind<W, B>, Kind<W, C>>>
  <F extends URIS2, E>(F: Applicative2C<F, E>): <A, B, C>(
    wa: Kind<W, A>,
    f: (a: A) => Kind2<F, E, Either<B, C>>
  ) => Kind2<F, E, Separated<Kind<W, B>, Kind<W, C>>>
  <F extends URIS>(F: Applicative1<F>): <A, B, C>(
    wa: Kind<W, A>,
    f: (a: A) => Kind<F, Either<B, C>>
  ) => Kind<F, Separated<Kind<W, B>, Kind<W, C>>>
  <F>(F: Applicative<F>): <A, B, C>(
    wa: Kind<W, A>,
    f: (a: A) => HKT<F, Either<B, C>>
  ) => HKT<F, Separated<Kind<W, B>, Kind<W, C>>>
}

/**
 * @since 2.0.0
 */
export interface Wilt2<W extends URIS2> {
  <F extends URIS3>(F: Applicative3<F>): <WE, A, R, FE, B, C>(
    wa: Kind2<W, WE, A>,
    f: (a: A) => Kind3<F, R, FE, Either<B, C>>
  ) => Kind3<F, R, FE, Separated<Kind2<W, WE, B>, Kind2<W, WE, C>>>
  <F extends URIS2>(F: Applicative2<F>): <WE, A, FE, B, C>(
    wa: Kind2<W, WE, A>,
    f: (a: A) => Kind2<F, FE, Either<B, C>>
  ) => Kind2<F, FE, Separated<Kind2<W, WE, B>, Kind2<W, WE, C>>>
  <F extends URIS2, FE>(F: Applicative2C<F, FE>): <WE, A, B, C>(
    wa: Kind2<W, WE, A>,
    f: (a: A) => Kind2<F, FE, Either<B, C>>
  ) => Kind2<F, FE, Separated<Kind2<W, WE, B>, Kind2<W, WE, C>>>
  <F extends URIS>(F: Applicative1<F>): <E, A, B, C>(
    wa: Kind2<W, E, A>,
    f: (a: A) => Kind<F, Either<B, C>>
  ) => Kind<F, Separated<Kind2<W, E, B>, Kind2<W, E, C>>>
  <F>(F: Applicative<F>): <E, A, B, C>(
    wa: Kind2<W, E, A>,
    f: (a: A) => HKT<F, Either<B, C>>
  ) => HKT<F, Separated<Kind2<W, E, B>, Kind2<W, E, C>>>
}

/**
 * @since 2.0.0
 */
export interface Wilt2C<W extends URIS2, E> {
  <F extends URIS3>(F: Applicative3<F>): <A, R, FE, B, C>(
    wa: Kind2<W, E, A>,
    f: (a: A) => Kind3<F, R, FE, Either<B, C>>
  ) => Kind3<F, R, FE, Separated<Kind2<W, E, B>, Kind2<W, E, C>>>
  <F extends URIS2>(F: Applicative2<F>): <A, FE, B, C>(
    wa: Kind2<W, E, A>,
    f: (a: A) => Kind2<F, FE, Either<B, C>>
  ) => Kind2<F, FE, Separated<Kind2<W, E, B>, Kind2<W, E, C>>>
  <F extends URIS2, FE>(F: Applicative2C<F, FE>): <A, B, C>(
    wa: Kind2<W, E, A>,
    f: (a: A) => Kind2<F, FE, Either<B, C>>
  ) => Kind2<F, FE, Separated<Kind2<W, E, B>, Kind2<W, E, C>>>
  <F extends URIS>(F: Applicative1<F>): <A, B, C>(
    wa: Kind2<W, E, A>,
    f: (a: A) => Kind<F, Either<B, C>>
  ) => Kind<F, Separated<Kind2<W, E, B>, Kind2<W, E, C>>>
  <F>(F: Applicative<F>): <A, B, C>(
    wa: Kind2<W, E, A>,
    f: (a: A) => HKT<F, Either<B, C>>
  ) => HKT<F, Separated<Kind2<W, E, B>, Kind2<W, E, C>>>
}

/**
 * @since 2.0.0
 */
export interface Wilt3<W extends URIS3> {
  <F extends URIS3>(F: Applicative3<F>): <WR, WE, A, FR, FE, B, C>(
    wa: Kind3<W, WR, WE, A>,
    f: (a: A) => Kind3<F, FR, FE, Either<B, C>>
  ) => Kind3<F, FR, FE, Separated<Kind3<W, WR, WE, B>, Kind3<W, WR, WE, C>>>
  <F extends URIS2>(F: Applicative2<F>): <R, WE, A, FE, B, C>(
    wa: Kind3<W, R, WE, A>,
    f: (a: A) => Kind2<F, FE, Either<B, C>>
  ) => Kind2<F, FE, Separated<Kind3<W, R, WE, B>, Kind3<W, R, WE, C>>>
  <F extends URIS2, FE>(F: Applicative2C<F, FE>): <R, WE, A, B, C>(
    wa: Kind3<W, R, WE, A>,
    f: (a: A) => Kind2<F, FE, Either<B, C>>
  ) => Kind2<F, FE, Separated<Kind3<W, R, WE, B>, Kind3<W, R, WE, C>>>
  <F extends URIS>(F: Applicative1<F>): <R, E, A, B, C>(
    wa: Kind3<W, R, E, A>,
    f: (a: A) => Kind<F, Either<B, C>>
  ) => Kind<F, Separated<Kind3<W, R, E, B>, Kind3<W, R, E, C>>>
  <F>(F: Applicative<F>): <R, E, A, B, C>(
    wa: Kind3<W, R, E, A>,
    f: (a: A) => HKT<F, Either<B, C>>
  ) => HKT<F, Separated<Kind3<W, R, E, B>, Kind3<W, R, E, C>>>
}

//
// pipeable `Wither`
//

/**
 * @since 2.6.5
 */
export interface PipeableWither<W> {
  <F extends URIS3>(F: Applicative3<F>): <A, R, E, B>(
    f: (a: A) => Kind3<F, R, E, Option<B>>
  ) => (ta: HKT<W, A>) => Kind3<F, R, E, HKT<W, B>>
  <F extends URIS3, E>(F: Applicative3C<F, E>): <A, R, B>(
    f: (a: A) => Kind3<F, R, E, Option<B>>
  ) => (ta: HKT<W, A>) => Kind3<F, R, E, HKT<W, B>>
  <F extends URIS2>(F: Applicative2<F>): <A, E, B>(
    f: (a: A) => Kind2<F, E, Option<B>>
  ) => (ta: HKT<W, A>) => Kind2<F, E, HKT<W, B>>
  <F extends URIS2, E>(F: Applicative2C<F, E>): <A, B>(
    f: (a: A) => Kind2<F, E, Option<B>>
  ) => (ta: HKT<W, A>) => Kind2<F, E, HKT<W, B>>
  <F extends URIS>(F: Applicative1<F>): <A, B>(f: (a: A) => Kind<F, Option<B>>) => (ta: HKT<W, A>) => Kind<F, HKT<W, B>>
  <F>(F: Applicative<F>): <A, B>(f: (a: A) => HKT<F, Option<B>>) => (ta: HKT<W, A>) => HKT<F, HKT<W, B>>
}

/**
 * @since 2.6.5
 */
export interface PipeableWither1<W extends URIS> {
  <F extends URIS3>(F: Applicative3<F>): <A, R, E, B>(
    f: (a: A) => Kind3<F, R, E, Option<B>>
  ) => (ta: Kind<W, A>) => Kind3<F, R, E, Kind<W, B>>
  <F extends URIS3, E>(F: Applicative3C<F, E>): <A, R, B>(
    f: (a: A) => Kind3<F, R, E, Option<B>>
  ) => (ta: Kind<W, A>) => Kind3<F, R, E, Kind<W, B>>
  <F extends URIS2>(F: Applicative2<F>): <A, E, B>(
    f: (a: A) => Kind2<F, E, Option<B>>
  ) => (ta: Kind<W, A>) => Kind2<F, E, Kind<W, B>>
  <F extends URIS2, E>(F: Applicative2C<F, E>): <A, B>(
    f: (a: A) => Kind2<F, E, Option<B>>
  ) => (ta: Kind<W, A>) => Kind2<F, E, Kind<W, B>>
  <F extends URIS>(F: Applicative1<F>): <A, B>(
    f: (a: A) => Kind<F, Option<B>>
  ) => (ta: Kind<W, A>) => Kind<F, Kind<W, B>>
  <F>(F: Applicative<F>): <A, B>(f: (a: A) => HKT<F, Option<B>>) => (ta: Kind<W, A>) => HKT<F, Kind<W, B>>
}

/**
 * @since 2.6.5
 */
export interface PipeableWither2<W extends URIS2> {
  <F extends URIS3>(F: Applicative3<F>): <A, R, FE, B>(
    f: (a: A) => Kind3<F, R, FE, Option<B>>
  ) => <WE>(ta: Kind2<W, WE, A>) => Kind3<F, R, FE, Kind2<W, WE, B>>
  <F extends URIS2>(F: Applicative2<F>): <A, FE, B>(
    f: (a: A) => Kind2<F, FE, Option<B>>
  ) => <WE>(ta: Kind2<W, WE, A>) => Kind2<F, FE, Kind2<W, WE, B>>
  <F extends URIS2, FE>(F: Applicative2C<F, FE>): <A, B>(
    f: (a: A) => Kind2<F, FE, Option<B>>
  ) => <WE>(ta: Kind2<W, WE, A>) => Kind2<F, FE, Kind2<W, WE, B>>
  <F extends URIS>(F: Applicative1<F>): <A, B>(
    f: (a: A) => Kind<F, Option<B>>
  ) => <WE>(ta: Kind2<W, WE, A>) => Kind<F, Kind2<W, WE, B>>
  <F>(F: Applicative<F>): <A, B>(f: (a: A) => HKT<F, Option<B>>) => <WE>(ta: Kind2<W, WE, A>) => HKT<F, Kind2<W, WE, B>>
}

/**
 * @since 2.6.5
 */
export interface PipeableWither2C<W extends URIS2, WE> {
  <F extends URIS3>(F: Applicative3<F>): <A, R, FE, B>(
    f: (a: A) => Kind3<F, R, FE, Option<B>>
  ) => (ta: Kind2<W, WE, A>) => Kind3<F, R, FE, Kind2<W, WE, B>>
  <F extends URIS2>(F: Applicative2<F>): <A, FE, B>(
    f: (a: A) => Kind2<F, FE, Option<B>>
  ) => (ta: Kind2<W, WE, A>) => Kind2<F, FE, Kind2<W, WE, B>>
  <F extends URIS2, FE>(F: Applicative2C<F, FE>): <A, B>(
    f: (a: A) => Kind2<F, FE, Option<B>>
  ) => (ta: Kind2<W, WE, A>) => Kind2<F, FE, Kind2<W, WE, B>>
  <F extends URIS>(F: Applicative1<F>): <A, B>(
    f: (a: A) => Kind<F, Option<B>>
  ) => (ta: Kind2<W, WE, A>) => Kind<F, Kind2<W, WE, B>>
  <F>(F: Applicative<F>): <A, B>(f: (a: A) => HKT<F, Option<B>>) => (ta: Kind2<W, WE, A>) => HKT<F, Kind2<W, WE, B>>
}

/**
 * @since 2.6.5
 */
export interface PipeableWither3<W extends URIS3> {
  <F extends URIS3>(F: Applicative3<F>): <A, FR, FE, B>(
    f: (a: A) => Kind3<F, FR, FE, Option<B>>
  ) => <WR, WE>(ta: Kind3<W, WR, WE, A>) => Kind3<F, FR, FE, Kind3<W, WR, WE, B>>
  <F extends URIS2>(F: Applicative2<F>): <A, FE, B>(
    f: (a: A) => Kind2<F, FE, Option<B>>
  ) => <WR, WE>(ta: Kind3<W, WR, WE, A>) => Kind2<F, FE, Kind3<W, WR, WE, B>>
  <F extends URIS2, FE>(F: Applicative2C<F, FE>): <A, B>(
    f: (a: A) => Kind2<F, FE, Option<B>>
  ) => <WR, WE>(ta: Kind3<W, WR, WE, A>) => Kind2<F, FE, Kind3<W, WR, WE, B>>
  <F extends URIS>(F: Applicative1<F>): <A, B>(
    f: (a: A) => Kind<F, Option<B>>
  ) => <WR, WE>(ta: Kind3<W, WR, WE, A>) => Kind<F, Kind3<W, WR, WE, B>>
  <F>(F: Applicative<F>): <A, B>(
    f: (a: A) => HKT<F, Option<B>>
  ) => <WR, WE>(ta: Kind3<W, WR, WE, A>) => HKT<F, Kind3<W, WR, WE, B>>
}

//
// pipeable `Wilt`
//

/**
 * @since 2.6.5
 */
export interface PipeableWilt<W> {
  <F extends URIS3>(F: Applicative3<F>): <A, R, E, B, C>(
    f: (a: A) => Kind3<F, R, E, Either<B, C>>
  ) => (wa: HKT<W, A>) => Kind3<F, R, E, Separated<HKT<W, B>, HKT<W, C>>>
  <F extends URIS3, E>(F: Applicative3C<F, E>): <A, R, B, C>(
    f: (a: A) => Kind3<F, R, E, Either<B, C>>
  ) => (wa: HKT<W, A>) => Kind3<F, R, E, Separated<HKT<W, B>, HKT<W, C>>>
  <F extends URIS2>(F: Applicative2<F>): <A, E, B, C>(
    f: (a: A) => Kind2<F, E, Either<B, C>>
  ) => (wa: HKT<W, A>) => Kind2<F, E, Separated<HKT<W, B>, HKT<W, C>>>
  <F extends URIS2, E>(F: Applicative2C<F, E>): <A, B, C>(
    f: (a: A) => Kind2<F, E, Either<B, C>>
  ) => (wa: HKT<W, A>) => Kind2<F, E, Separated<HKT<W, B>, HKT<W, C>>>
  <F extends URIS>(F: Applicative1<F>): <A, B, C>(
    f: (a: A) => Kind<F, Either<B, C>>
  ) => (wa: HKT<W, A>) => Kind<F, Separated<HKT<W, B>, HKT<W, C>>>
  <F>(F: Applicative<F>): <A, B, C>(
    f: (a: A) => HKT<F, Either<B, C>>
  ) => (wa: HKT<W, A>) => HKT<F, Separated<HKT<W, B>, HKT<W, C>>>
}

/**
 * @since 2.6.5
 */
export interface PipeableWilt1<W extends URIS> {
  <F extends URIS3>(F: Applicative3<F>): <A, R, E, B, C>(
    f: (a: A) => Kind3<F, R, E, Either<B, C>>
  ) => (wa: Kind<W, A>) => Kind3<F, R, E, Separated<Kind<W, B>, Kind<W, C>>>
  <F extends URIS3, E>(F: Applicative3C<F, E>): <A, R, B, C>(
    f: (a: A) => Kind3<F, R, E, Either<B, C>>
  ) => (wa: Kind<W, A>) => Kind3<F, R, E, Separated<Kind<W, B>, Kind<W, C>>>
  <F extends URIS2>(F: Applicative2<F>): <A, E, B, C>(
    f: (a: A) => Kind2<F, E, Either<B, C>>
  ) => (wa: Kind<W, A>) => Kind2<F, E, Separated<Kind<W, B>, Kind<W, C>>>
  <F extends URIS2, E>(F: Applicative2C<F, E>): <A, B, C>(
    f: (a: A) => Kind2<F, E, Either<B, C>>
  ) => (wa: Kind<W, A>) => Kind2<F, E, Separated<Kind<W, B>, Kind<W, C>>>
  <F extends URIS>(F: Applicative1<F>): <A, B, C>(
    f: (a: A) => Kind<F, Either<B, C>>
  ) => (wa: Kind<W, A>) => Kind<F, Separated<Kind<W, B>, Kind<W, C>>>
  <F>(F: Applicative<F>): <A, B, C>(
    f: (a: A) => HKT<F, Either<B, C>>
  ) => (wa: Kind<W, A>) => HKT<F, Separated<Kind<W, B>, Kind<W, C>>>
}

/**
 * @since 2.6.5
 */
export interface PipeableWilt2<W extends URIS2> {
  <F extends URIS3>(F: Applicative3<F>): <A, R, FE, B, C>(
    f: (a: A) => Kind3<F, R, FE, Either<B, C>>
  ) => <WE>(wa: Kind2<W, WE, A>) => Kind3<F, R, FE, Separated<Kind2<W, WE, B>, Kind2<W, WE, C>>>
  <F extends URIS2>(F: Applicative2<F>): <A, FE, B, C>(
    f: (a: A) => Kind2<F, FE, Either<B, C>>
  ) => <WE>(wa: Kind2<W, WE, A>) => Kind2<F, FE, Separated<Kind2<W, WE, B>, Kind2<W, WE, C>>>
  <F extends URIS2, FE>(F: Applicative2C<F, FE>): <A, B, C>(
    f: (a: A) => Kind2<F, FE, Either<B, C>>
  ) => <WE>(wa: Kind2<W, WE, A>) => Kind2<F, FE, Separated<Kind2<W, WE, B>, Kind2<W, WE, C>>>
  <F extends URIS>(F: Applicative1<F>): <A, B, C>(
    f: (a: A) => Kind<F, Either<B, C>>
  ) => <WE>(wa: Kind2<W, WE, A>) => Kind<F, Separated<Kind2<W, WE, B>, Kind2<W, WE, C>>>
  <F>(F: Applicative<F>): <A, B, C>(
    f: (a: A) => HKT<F, Either<B, C>>
  ) => <WE>(wa: Kind2<W, WE, A>) => HKT<F, Separated<Kind2<W, WE, B>, Kind2<W, WE, C>>>
}

/**
 * @since 2.6.5
 */
export interface PipeableWilt2C<W extends URIS2, WE> {
  <F extends URIS3>(F: Applicative3<F>): <A, R, FE, B, C>(
    f: (a: A) => Kind3<F, R, FE, Either<B, C>>
  ) => (wa: Kind2<W, WE, A>) => Kind3<F, R, FE, Separated<Kind2<W, WE, B>, Kind2<W, WE, C>>>
  <F extends URIS2>(F: Applicative2<F>): <A, FE, B, C>(
    f: (a: A) => Kind2<F, FE, Either<B, C>>
  ) => (wa: Kind2<W, WE, A>) => Kind2<F, FE, Separated<Kind2<W, WE, B>, Kind2<W, WE, C>>>
  <F extends URIS2, FE>(F: Applicative2C<F, FE>): <A, B, C>(
    f: (a: A) => Kind2<F, FE, Either<B, C>>
  ) => (wa: Kind2<W, WE, A>) => Kind2<F, FE, Separated<Kind2<W, WE, B>, Kind2<W, WE, C>>>
  <F extends URIS>(F: Applicative1<F>): <A, B, C>(
    f: (a: A) => Kind<F, Either<B, C>>
  ) => (wa: Kind2<W, WE, A>) => Kind<F, Separated<Kind2<W, WE, B>, Kind2<W, WE, C>>>
  <F>(F: Applicative<F>): <A, B, C>(
    f: (a: A) => HKT<F, Either<B, C>>
  ) => (wa: Kind2<W, WE, A>) => HKT<F, Separated<Kind2<W, WE, B>, Kind2<W, WE, C>>>
}

/**
 * @since 2.6.5
 */
export interface PipeableWilt3<W extends URIS3> {
  <F extends URIS3>(F: Applicative3<F>): <A, FR, FE, B, C>(
    f: (a: A) => Kind3<F, FR, FE, Either<B, C>>
  ) => <WR, WE>(wa: Kind3<W, WR, WE, A>) => Kind3<F, FR, FE, Separated<Kind3<W, WR, WE, B>, Kind3<W, WR, WE, C>>>
  <F extends URIS2>(F: Applicative2<F>): <A, FE, B, C>(
    f: (a: A) => Kind2<F, FE, Either<B, C>>
  ) => <WR, WE>(wa: Kind3<W, WR, WE, A>) => Kind2<F, FE, Separated<Kind3<W, WR, WE, B>, Kind3<W, WR, WE, C>>>
  <F extends URIS2, FE>(F: Applicative2C<F, FE>): <A, B, C>(
    f: (a: A) => Kind2<F, FE, Either<B, C>>
  ) => <WR, WE>(wa: Kind3<W, WR, WE, A>) => Kind2<F, FE, Separated<Kind3<W, WR, WE, B>, Kind3<W, WR, WE, C>>>
  <F extends URIS>(F: Applicative1<F>): <A, B, C>(
    f: (a: A) => Kind<F, Either<B, C>>
  ) => <WR, WE>(wa: Kind3<W, WR, WE, A>) => Kind<F, Separated<Kind3<W, WR, WE, B>, Kind3<W, WR, WE, C>>>
  <F>(F: Applicative<F>): <A, B, C>(
    f: (a: A) => HKT<F, Either<B, C>>
  ) => <WR, WE>(wa: Kind3<W, WR, WE, A>) => HKT<F, Separated<Kind3<W, WR, WE, B>, Kind3<W, WR, WE, C>>>
}
